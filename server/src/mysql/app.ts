import express from 'express';
import { PrismaClient } from '../../prisma/generated/client/';

const app = express();

app.use(express.json());

const prisma = new PrismaClient();

// Endpoint para crear un jugador
app.post('/players', async (req, res) => {
  try {
    const { name } = req.body;

    const newPlayer = await prisma.player.create({
      data: {
        name: name || 'ANONIMO',
      },
    });

    res.send(newPlayer);
  } catch (error) {
    console.error('Error al crear un nuevo jugador/a:', error);
    res.status(500).send('Error interno del servidor');
  }
});

// Endpoint para cambiar nombre de jugador
app.put('/players/:id', async (req, res) => {
  try {
    const playerId = Number(req.params.id);
    const { name } = req.body;

    // Actualizar el nombre del jugador/a en la base de datos
    const updatedPlayer = await prisma.player.update({
      where: {
        id: playerId,
      },
      data: {
        name: name || 'ANONIMO',
      },
    });

    if (!updatedPlayer) {
      return res.status(404).send({ error: 'Jugador/a no encontrado' });
    }

    res.send(updatedPlayer);
  } catch (error) {
    console.error('Error al modificar el nombre del jugador/a:', error);
    res.status(500).send('Error interno del servidor');
  }
});

// Endpoint para devolver lista jugadores con porcentaje de éxitos:
app.get('/players', async (_req, res) => {
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
    const allPlayers = await prisma.player.findMany({
      include: {
        rolls: true,
      },
    });

    const playersWithSuccessPercentage = allPlayers.map(
      (player: PlayerType) => {
        const totalRolls = player.rolls.length;
        const successfulRolls = player.rolls.filter(
          (roll) => roll.isWinner
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
    console.error('Error al obtener la lista de jugadores/as:', error);
    res.status(500).send('Error interno del servidor');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('Servidor escuchando en puerto ', PORT);
});
