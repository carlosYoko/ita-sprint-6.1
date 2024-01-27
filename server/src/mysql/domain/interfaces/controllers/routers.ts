import express from 'express';
import { playerController } from './playerControllers';
import { gamesControllers } from './gamesControllers';

export const routerPlayer = express.Router();
export const routerGames = express.Router();

routerPlayer.get('/api', playerController.wellcome);
routerPlayer.post('/', playerController.createPlayer);
routerPlayer.put('/:id', playerController.renamePlayer);
routerPlayer.get('/', playerController.getAllPlayers);

routerGames.post('/:id', gamesControllers.rollDice);
routerGames.get('/:id', gamesControllers.getRolls);
