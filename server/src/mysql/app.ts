import express from 'express';
import cors from 'cors';
import { routerPlayer } from './domain/interfaces/controllers/routerPlayer';

export const app = express();
app.use(cors());
app.use(express.json());

app.use('/players', routerPlayer);
