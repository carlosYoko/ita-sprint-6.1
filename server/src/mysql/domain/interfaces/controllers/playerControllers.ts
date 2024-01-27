import { Request, Response } from 'express';
import { playerRepositoryImpl } from '../../../infrastructure/repositories/playerRepositoryImpl';
import { sayWellcomeUseCase } from '../../../application/usecases/sayWellcomeUseCase';
import { createPlayerUseCase } from '../../../application/usecases/createPlayerUseCase';
import { renamePlayerUseCase } from '../../../application/usecases/renamePlayerUseCase';

export const playerController = {
  wellcome: async (_req: Request, res: Response) => {
    const mensaje = await sayWellcomeUseCase(playerRepositoryImpl);
    return res.status(200).send(mensaje);
  },

  createPlayer: async (req: Request, res: Response) => {
    try {
      const { name } = req.body;
      const newPlayer = await createPlayerUseCase(playerRepositoryImpl, name);
      return res.status(201).send(newPlayer);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send({ error: error.message });
      }
    }
  },

  renamePlayer: async (req: Request, res: Response) => {
    try {
      const playerId = Number(req.params.id);
      const { name } = req.body;
      const renamePlayer = await renamePlayerUseCase(
        playerRepositoryImpl,
        name,
        playerId
      );
      return res.status(201).send(renamePlayer);
    } catch (error) {}
  },
};
