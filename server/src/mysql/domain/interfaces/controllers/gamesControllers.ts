import { Request, Response } from 'express';
import { gamesRepositoryImpl } from '../../../infrastructure/repositories/gamesRepositoryImpl';
import { rollDiceUseCase } from '../../../application/usecases/games/rollDiceUseCase';
import { getRollUseCase } from '../../../application/usecases/games/getRollUseCase';
import { deleteRollUseCase } from '../../../application/usecases/games/deleteRollUseCase';
import jwt from 'jsonwebtoken';

const secretKey = process.env.SECRET || 'secret_word';

export const gamesControllers = {
  rollDice: async (req: Request, res: Response) => {
    const token = req.headers.authorization?.split(' ')[1];

    try {
      if (!token) {
        throw new Error('Token no proporcionado');
      }
      jwt.verify(token, secretKey);
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
      const playerRolls = await getRollUseCase(gamesRepositoryImpl, playerId);
      res.status(201).send(playerRolls);
    } catch (error) {
      if (error instanceof Error) {
        res
          .status(500)
          .send({ message: 'Error interno del servidor:', error: error });
      }
    }
  },

  deleteRollsById: async (req: Request, res: Response) => {
    try {
      const playerId = Number(req.params.id);
      await deleteRollUseCase(gamesRepositoryImpl, playerId);
      res.status(200).send({ message: `Tiradas eliminadas exitosamente` });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send({
          message: 'Error interno del servidor:',
          error: error.message,
        });
      }
    }
  },
};
