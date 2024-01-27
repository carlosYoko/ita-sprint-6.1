import { IPlayerWithRolls } from '../../domain/entities/rolls';
import { RankingRepository } from '../../domain/interfaces/rankingRepository';
import { PrismaClient } from '../../../../prisma/generated/client';

export const rankingRepositoryImpl: RankingRepository = {
  prisma: new PrismaClient(),

  async getAllPlayersAndRolls(): Promise<IPlayerWithRolls[]> {
    return await this.prisma.player.findMany({
      include: {
        rolls: true,
      },
    });
  },

  async getAllPlayers(): Promise<IPlayerWithRolls[]> {
    return await this.prisma.player.findMany({
      include: {
        rolls: true,
      },
    });
  },
};
