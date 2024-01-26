import express, { Request, Response } from 'express';
import { PrismaClient } from '../../../prisma/generated/client';
import { CreatePlayerUseCase } from './usecases/createPlayerUseCase';

export const initializeApp = (
  app: express.Application,
  prisma: PrismaClient
) => {
  // Endpoint para crear un jugador
  app.post('/players', async (req: Request, res: Response) => {
    await CreatePlayerUseCase(req, res, prisma);
  });
};
