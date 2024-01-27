import { IPlayer } from '../entities/player';
import { PrismaClient } from '../../../../prisma/generated/client';

export interface PlayerRepository {
  prisma: PrismaClient;
  wellcome: () => void;
  findPlayerByName(name: string): Promise<IPlayer | null>;
  findPlayerByID(playerId: number): Promise<IPlayer | null>;
  createPlayer(data: { name: string }): Promise<IPlayer>;
}
