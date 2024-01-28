import { Request, Response } from 'express';
import { playerRepositoryImpl } from '../../../infrastructure/repositories/playerRepositoryImpl';
import { createPlayerUseCase } from '../../../application/usecases/player/createPlayerUseCase';
import { renamePlayerUseCase } from '../../../application/usecases/player/renamePlayerUseCase';
import { getAllPlayersUseCase } from '../../../application/usecases/player/getAllPlayersUseCase';
import jwt from 'jsonwebtoken';

const secretKey = process.env.SECRET || 'secret_word';

export const playerController = {
  createPlayer: async (req: Request, res: Response) => {
    try {
      const { name } = req.body;
      const newPlayer = await createPlayerUseCase(playerRepositoryImpl, name);
      const newToken = jwt.sign(
        {
          id: newPlayer.id,
          name: newPlayer.name,
        },
        secretKey,
        { expiresIn: '3m' }
      );

      return res.status(201).send({ player: newPlayer, token: newToken });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send({ error: error.message });
      }
    }
  },

  renamePlayer: async (req: Request, res: Response) => {
    const token = req.headers.authorization?.split(' ')[1];

    try {
      if (!token) {
        throw new Error('Token no proporcionado');
      }
      jwt.verify(token, secretKey);

      const playerId = Number(req.params.id);
      const { name } = req.body;
      const renamePlayer = await renamePlayerUseCase(
        playerRepositoryImpl,
        name,
        playerId
      );

      return res.status(201).send(renamePlayer);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(404).send({ error: error.message });
      }
    }
  },

  getAllPlayers: async (_req: Request, res: Response) => {
    try {
      const allPlayers = await getAllPlayersUseCase(playerRepositoryImpl);
      return res.status(200).send(allPlayers);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send({ error: error.message });
      }
    }
  },
};
