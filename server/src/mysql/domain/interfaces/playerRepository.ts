import { IPlayer } from '../entities/player';
import { PrismaClient } from '../../../../prisma/generated/client';

export interface PlayerRepository {
  prisma: PrismaClient;
  wellcome: () => void;
  findPlayerByName(name: string): Promise<IPlayer | null>;
  findPlayerByID(playerId: number): Promise<IPlayer | null>;
  createPlayer(name: string): Promise<IPlayer>;
  existingPlayer(id: number): Promise<IPlayer | null>;
  existingName(name: string, playerId: number): Promise<IPlayer | null>;
  updatePlayerName(name: string, playerId: number): Promise<IPlayer | null>;
}
