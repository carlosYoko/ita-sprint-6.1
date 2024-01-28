import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';

import { PrismaClient } from '../../prisma/generated/client';

export const app = express();

app.use(cors());
app.use(express.json());

export const prisma = new PrismaClient();

const secretKey = process.env.SECRET || 'secreto!';

/**
 * Endpoints players
 */
// Endpoint para crear un jugador
app.post('/players', async (req, res) => {
  try {
    const { name } = req.body;

    // Verificar si ya existe un jugador con el mismo nombre
    const existingPlayer = await prisma.player.findFirst({
      where: {
        name: name.trim(),
        NOT: {
          name: 'ANONIMO',
        },
      },
    });

    if (!existingPlayer) {
      // Si no existe el jugador, crea un nuevo jugador
      const newPlayer = await prisma.player.create({
        data: {
          name: name.trim() || 'ANONIMO',
        },
      });

      // Genera un nuevo token y envíalo en la respuesta
      const newToken = jwt.sign(
        {
          id: newPlayer.id,
          name: newPlayer.name,
        },
        secretKey,
        { expiresIn: '30m' }
      );

      res.status(200).send({ player: newPlayer, token: newToken });
    } else {
      res
        .status(400)
        .send({ message: 'Ya existe un jugador con este nombre!' });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Error interno del servidor', error: error });
  }
});

// Endpoint para cambiar nombre de jugador

app.put('/players/:id', async (req, res) => {
  const playerId = Number(req.params.id);
  const { name } = req.body;
  const token = req.headers.authorization?.split(' ')[1];

  try {
    // Verifica si el jugador existe antes de intentar actualizarlo
    const existingPlayer = await prisma.player.findUnique({
      where: {
        id: playerId,
      },
    });

    if (!existingPlayer) {
      return res.status(404).send({ error: 'Jugador no encontrado' });
    }

    // Verifica que no exista otro jugador con el nuevo nombre
    const existingName = await prisma.player.findFirst({
      where: {
        name: name,
        id: {
          not: {
            equals: playerId,
          },
        },
      },
    });

    if (existingName) {
      return res
        .status(400)
        .send({ error: 'Ya existe un jugador con este nombre!' });
    }

    // Ahora que sabemos que el jugador existe y no hay conflictos, verificamos el token
    try {
      if (!token) {
        throw new Error('Token no proporcionado');
      }

      jwt.verify(token, secretKey);

      // Ahora que el token es válido, actualiza el nombre del jugador en la base de datos
      const updatedPlayer = await prisma.player.update({
        where: {
          id: playerId,
        },
        data: {
          name: name || 'ANONIMO',
        },
      });

      res.send(updatedPlayer);
    } catch (err) {
      console.error('Error al verificar el token:', err);
      return res
        .status(401)
        .send({ error: 'Token inválido, ya no puedes jugar con este usuario' });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Error interno del servidor', error: error });
  }
});

// Endpoint para devolver lista jugadores con porcentaje de exitos:
app.get('/players', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  try {
    if (!token) {
      throw new Error('Token no proporcionado');
    }
    jwt.verify(token, secretKey);
  } catch (error) {
    console.error('Error al verificar el token:', error);
    return res
      .status(401)
      .send({ error: 'Token inválido, ya no puedes jugar con este usuario' });
  }

  type RollType = {
    dice1: number;
    dice2: number;
    isWinner: boolean;
  };

  type PlayerType = {
    id: number;
    name: string;
    rolls: RollType[];
  };

  // Obtiene todos los jugadores junto con sus tiradas
  try {
    const allPlayers = await prisma.player.findMany({
      include: {
        rolls: true,
      },
    });

    const playersWithSuccessPercentage = allPlayers.map(
      (player: PlayerType) => {
        const totalRolls = player.rolls.length;
        const successfulRolls = player.rolls.filter(
          (roll) => roll.isWinner === true
        ).length;

        const successPercentage = (successfulRolls / totalRolls) * 100;

        return {
          id: player.id,
          name: player.name,
          successPercentage: successPercentage || 'Sin partidas ganadas',
        };
      }
    );

    res.json(playersWithSuccessPercentage);
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Error interno del servidor', error: error });
  }
});

/**
 * Endpoints games
 */
// Endpoint para realizar una tirada
app.post('/games/:id', async (req, res) => {
  try {
    const playerId = Number(req.params.id);

    // Realizar la tirada de dos dados
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const total = dice1 + dice2;
    const win = total === 7;

    // Guardar la tirada en la base de datos
    const rollDiceResult = await prisma.roll.create({
      data: {
        dice1: dice1,
        dice2: dice2,
        isWinner: win,
        playerId: playerId,
      },
    });

    res.status(201).send(rollDiceResult);
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Error interno del servidor:', error: error });
  }
});

// Endpoint para obtener todas las tiradas de un jugador
app.get('/games/:id', async (req, res) => {
  try {
    const playerId = Number(req.params.id);

    // Obtener la lista de tiradas por un jugador
    const playerRolls = await prisma.roll.findMany({
      where: {
        playerId: playerId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.status(200).send(playerRolls);
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Error interno del servidor:', error: error });
  }
});

// Endpoint para eliminar todas las tiradas de un jugador
app.delete('/games/:id', async (req, res) => {
  try {
    const playerId = Number(req.params.id);

    await prisma.player.findFirst({
      where: {
        id: playerId,
      },
    });

    // Elimina todas las tiradas
    await prisma.roll.deleteMany({
      where: {
        playerId,
      },
    });

    res.status(200).json({ message: `Tiradas eliminadas exitosamente` });
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Error interno del servidor:', error: error });
  }
});

/**
 * Endpoints ranking
 */
// Endpoint del ranking de todos los jugadores y porcentaje medio de exitos
app.get('/ranking', async (_req, res) => {
  type RollType = {
    dice1: number;
    dice2: number;
    isWinner: boolean;
  };

  type PlayerType = {
    id: number;
    name: string;
    rolls: RollType[];
  };

  try {
    // Obtener la lista de jugadores y sus jugadas
    const allPlayersAndPlays = await prisma.player.findMany({
      include: {
        rolls: true,
      },
    });

    // Calcular el porcentaje de exito medio del conjunto de todos los jugadores
    const totalRollsAllPlayers = allPlayersAndPlays.reduce(
      (acc, cur) => acc + cur.rolls.length,
      0
    );

    const totalWins = allPlayersAndPlays
      .map(
        (player) => player.rolls.filter((roll) => roll.isWinner === true).length
      )
      .reduce((acc, cur) => acc + cur, 0);

    const averageSuccessRate = (totalWins / totalRollsAllPlayers) * 100;

    // Función para obtener el porcentaje de exito de un jugador
    const getSuccessRate = (player: PlayerType) => {
      const totalRolls = player.rolls.length;
      if (totalRolls === 0) return 0;
      const wins = player.rolls.filter((roll) => roll.isWinner === true).length;
      return (wins / totalRolls) * 100;
    };

    // Ordenar la lista de jugadores por porcentaje de exito
    const sortedPlayersBySuccess = allPlayersAndPlays.sort(
      (a, b) => getSuccessRate(b) - getSuccessRate(a)
    );

    // Crear el ranking con la informacion necesaria
    const ranking = sortedPlayersBySuccess.map((player) => ({
      id: player.id,
      name: player.name,
      successRate: getSuccessRate(player),
    }));

    // Enviar la respuesta con el ranking y el porcentaje de exito medio
    res.status(200).send({
      ranking,
      averageSuccessRate,
    });
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Error interno del servidor', error: error });
  }
});

// Endpoint para devolver el jugador con peor procentaje de exitos
app.get('/ranking/loser', async (_req, res) => {
  type RollType = {
    dice1: number;
    dice2: number;
    isWinner: boolean;
  };

  type PlayerType = {
    id: number;
    name: string;
    rolls: RollType[];
  };

  try {
    // Obtener la lista de jugadores y sus jugadas
    const allPlayersAndPlays = await prisma.player.findMany({
      include: {
        rolls: true,
      },
    });

    // Funcion para obtener el porcentaje de exito de un jugador
    const getSuccessRate = (player: PlayerType) => {
      const totalRolls = player.rolls.length;
      if (totalRolls === 0) return 0;
      const wins = player.rolls.filter((roll) => roll.isWinner === true).length;
      return (wins / totalRolls) * 100;
    };

    // Jugador con peor porcentaje de exito
    const loserPlayer = allPlayersAndPlays.reduce((prev, cur) => {
      const prevSuccessRate = getSuccessRate(prev);
      const currentSuccessRate = getSuccessRate(cur);
      return prevSuccessRate < currentSuccessRate ? prev : cur;
    });

    // Envia la respuesta del jugador con el peor porcentaje de exito
    res.status(200).send({
      loser: {
        id: loserPlayer.id,
        name: loserPlayer.name,
        successRate: getSuccessRate(loserPlayer),
      },
    });
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Error interno del servidor', error: error });
  }
});

// Endpoint para devolver el jugador con mayor procentaje de exitos
app.get('/ranking/winner', async (_req, res) => {
  type RollType = {
    dice1: number;
    dice2: number;
    isWinner: boolean;
  };

  type PlayerType = {
    id: number;
    name: string;
    rolls: RollType[];
  };

  try {
    // Obtener la lista de jugadores y sus jugadas
    const allPlayersAndPlays = await prisma.player.findMany({
      include: {
        rolls: true,
      },
    });

    // Funcion para obtener el porcentaje de exito de un jugador
    const getSuccessRate = (player: PlayerType) => {
      const totalRolls = player.rolls.length;
      if (totalRolls === 0) return 0;
      const wins = player.rolls.filter((roll) => roll.isWinner === true).length;
      return (wins / totalRolls) * 100;
    };

    // Jugador con mayor tasa de exito
    const winnerPlayer = allPlayersAndPlays.reduce((prev, cur) => {
      const prevSuccessRate = getSuccessRate(prev);
      const currentSuccessRate = getSuccessRate(cur);
      return prevSuccessRate > currentSuccessRate ? prev : cur;
    });

    // Envia la respuesta del jugador con el peor porcentaje de exito
    res.status(200).send({
      winner: {
        id: winnerPlayer.id,
        name: winnerPlayer.name,
        successRate: getSuccessRate(winnerPlayer),
      },
    });
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Error interno del servidor', error: error });
  }
});
