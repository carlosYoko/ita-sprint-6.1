import express from 'express';
import { playerController } from './playerControllers';

export const routerPlayer = express.Router();

routerPlayer.get('/api', playerController.wellcome);
routerPlayer.post('/', playerController.createPlayer);
routerPlayer.put('/:id', playerController.renamePlayer);
routerPlayer.get('/', playerController.getAllPlayers);
