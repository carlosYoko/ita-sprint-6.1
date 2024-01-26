import { Request, Response } from 'express';
// import {
//   findPlayerByName,
//   createNewPlayer,
// } from '../../infrastructure/repositories/playerRepository';
import { createPlayer } from '../usecases/createPlayer';
import { PrismaClient } from '../../../../prisma/generated/client';

export const createPlayerController = async (
  req: Request,
  res: Response,
  prisma: PrismaClient
) => {
  try {
    const { name } = req.body;

    const newPlayer = await createPlayer(prisma, name);

    res.status(200).send(newPlayer);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send({ message: error.message });
    }
  }
};

// export const createPlayerController = async (
//   req: Request,
//   res: Response,
//   prisma: PrismaClient
// ) => {
//   try {
//     const { name } = req.body;

//     const existingPlayer = await findPlayerByName(prisma, name);

//     if (!existingPlayer) {
//       const newPlayer = await createNewPlayer(prisma, name);
//       res.status(200).send(newPlayer);
//     } else {
//       throw new Error('Ya existe un jugador con este nombre!');
//     }
//   } catch (error) {
//     if (error instanceof Error) {
//       res.status(400).send({ message: error.message });
//     }
//   }
// };
