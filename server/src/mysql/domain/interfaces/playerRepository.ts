// nuevo
import { IPlayer } from '../entities/player';
import { PrismaClient } from '../../../../prisma/generated/client';

export interface PlayerRepository {
  prisma: PrismaClient;
  findPlayerByName(name: string): Promise<IPlayer | null>;
  createPlayer(data: { name: string }): Promise<IPlayer>;
}
