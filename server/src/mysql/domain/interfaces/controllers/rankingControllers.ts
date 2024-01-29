import { Request, Response } from 'express';
import { getAllRankingsUseCase } from '../../../application/usecases/ranking/getAllRankingsUseCase';
import { rankingRepositoryImpl } from '../../../infrastructure/repositories/rankingRepositoryImpl';
import { getWorstPlayerUseCase } from '../../../application/usecases/ranking/getWorstPlayerUseCase';
import { getBestPlayerUseCase } from '../../../application/usecases/ranking/getBestPlayerUseCase';

export const rankingControllers = {
  getAllRankings: async (_req: Request, res: Response) => {
    try {
      const ranking = await getAllRankingsUseCase(rankingRepositoryImpl);
      res.status(200).send(ranking);
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
      res.status(200).send(worstPlayer);
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
      const bestPlayer = await getBestPlayerUseCase(rankingRepositoryImpl);
      res.status(200).send(bestPlayer);
    } catch (error) {
      if (error instanceof Error) {
        res
          .status(500)
          .send({ message: 'Error interno del servidor', error: error });
      }
    }
  },
};
