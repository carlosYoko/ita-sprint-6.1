import express from 'express';
import cors from 'cors';
import {
  routerPlayer,
  routerGames,
} from '../mysql/domain/interfaces/controllers/routers';

import { PrismaClient } from '../../prisma/generated/client';

export const prisma = new PrismaClient();

export const app = express();
app.use(cors());
app.use(express.json());

app.use('/players', routerPlayer);
app.use('/games', routerGames);
