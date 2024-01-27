import { Request, Response } from 'express';
import { getAllRankingsUseCase } from '../../../application/usecases/ranking/getAllRankingsUseCase';
import { rankingRepositoryImpl } from '../../../infrastructure/repositories/rankingRepositoryImpl';
import { getWorstPlayerUseCase } from '../../../application/usecases/ranking/getWorstPlayerUseCase';

export const rankingControllers = {
  getAllRankings: async (_req: Request, res: Response) => {
    try {
      const ranking = await getAllRankingsUseCase(rankingRepositoryImpl);
      res.status(201).send(ranking);
    } catch (error) {
      if (error instanceof Error) {
        res
          .status(500)
          .send({ message: 'Error interno del servidor', error: error });
      }
    }
  },

  getWorstPlayer: async (_req: Request, res: Response) => {
    try {
      const worstPlayer = await getWorstPlayerUseCase(rankingRepositoryImpl);
      res.status(201).send(worstPlayer);
    } catch (error) {
      if (error instanceof Error) {
        res
          .status(500)
          .send({ message: 'Error interno del servidor', error: error });
      }
    }
  },

  getBestPlayer: async (_req: Request, res: Response) => {
    try {
      const worstPlayer = await getWorstPlayerUseCase(rankingRepositoryImpl);
      res.status(201).send(worstPlayer);
    } catch (error) {
      if (error instanceof Error) {
        res
          .status(500)
          .send({ message: 'Error interno del servidor', error: error });
      }
    }
  },
};
