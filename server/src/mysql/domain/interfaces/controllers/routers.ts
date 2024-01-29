import express from 'express';
import { playerController } from './playerControllers';
import { gamesControllers } from './gamesControllers';
import { rankingControllers } from './rankingControllers';
import { authenticateMiddleware } from '../../../../config/authenticate';

export const routerPlayer = express.Router();
export const routerGames = express.Router();
export const routerRanking = express.Router();

routerPlayer.post('/', playerController.createPlayer);
routerPlayer.put('/:id', authenticateMiddleware, playerController.renamePlayer);
routerPlayer.get('/', playerController.getAllPlayers);

routerGames.post('/:id', authenticateMiddleware, gamesControllers.rollDice);
routerGames.get('/:id', gamesControllers.getRolls);
routerGames.delete('/:id', gamesControllers.deleteRollsById);

routerRanking.get('/', rankingControllers.getAllRankings);
routerRanking.get('/loser', rankingControllers.getWorstPlayer);
routerRanking.get('/winner', rankingControllers.getBestPlayer);
