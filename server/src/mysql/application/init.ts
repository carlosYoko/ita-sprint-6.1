import express, { Request, Response } from 'express';
import { createPlayerController } from './controllers/playerController';
import { PrismaClient } from '../../../prisma/generated/client';

export const initializeApp = (
  app: express.Application,
  prisma: PrismaClient
) => {
  // Endpoint para crear un jugador
  app.post('/players', async (req: Request, res: Response) => {
    await createPlayerController(req, res, prisma);
  });
};
