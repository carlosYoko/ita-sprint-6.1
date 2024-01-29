import { IPlayerWithRolls } from '../entities/rolls';
import { PrismaClient } from '../../../../prisma/generated/client';
export interface RankingRepository {
  prisma: PrismaClient;
  getAllPlayersAndRolls(): Promise<IPlayerWithRolls[]>;
  getAllPlayers(): Promise<IPlayerWithRolls[]>;
}
