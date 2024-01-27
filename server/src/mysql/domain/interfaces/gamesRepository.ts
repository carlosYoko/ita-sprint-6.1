import { IRollDice } from '../entities/rolls';
import { PrismaClient } from '../../../../prisma/generated/client';
import { IPlayer } from '../entities/player';

export interface GamesRepository {
  prisma: PrismaClient;
  rollDice(
    dice1: number,
    dice2: number,
    isWinner: boolean,
    playerId: number
  ): Promise<IRollDice | null>;
  getRollsById(playerId: number): Promise<IRollDice[] | null>;
  getPlayerById(playerId: number): Promise<IPlayer | null>;
  deleteRollsById(playerId: number): Promise<void>;
}
