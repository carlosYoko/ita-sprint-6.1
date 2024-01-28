import express from 'express';
import cors from 'cors';
import {
  routerPlayer,
  routerGames,
  routerRanking,
} from '../mysql/domain/interfaces/controllers/routers';

export const app = express();
app.use(cors());
app.use(express.json());

app.use('/players', routerPlayer);
app.use('/games', routerGames);
app.use('/ranking', routerRanking);
