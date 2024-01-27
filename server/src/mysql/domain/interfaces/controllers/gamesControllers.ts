import { Request, Response } from 'express';
import { gamesRepositoryImpl } from '../../../infrastructure/repositories/gamesRepositoryImpl';
import { rollDiceUseCase } from '../../../application/usecases/games/rollDiceUseCase';
import { getRollUseCase } from 'mysql/application/usecases/games/getRollUseCase';

export const gamesControllers = {
  rollDice: async (req: Request, res: Response) => {
    try {
      const playerId = Number(req.params.id);
      const rollDiceResult = await rollDiceUseCase(
        gamesRepositoryImpl,
        playerId
      );
      res.status(201).send(rollDiceResult);
    } catch (error) {
      if (error instanceof Error) {
        return res
          .status(500)
          .send({ message: 'Error interno del servidor:', error: error });
      }
    }
  },
  getRolls: async (req: Request, res: Response) => {
    try {
      const playerId = Number(req.params.id);
      const playerRolls = await gamesRepositoryImpl.getRollsById(playerId);
      res.status(200).send(playerRolls);
    } catch (error) {
      if (error instanceof Error) {
        res
          .status(500)
          .send({ message: 'Error interno del servidor:', error: error });
      }
    }
  },
};
