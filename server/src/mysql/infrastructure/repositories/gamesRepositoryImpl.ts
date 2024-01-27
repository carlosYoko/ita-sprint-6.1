import { IRollDice } from '../../domain/entities/rolls';
import { IPlayer } from '../../domain/entities/player';
import { PrismaClient } from '../../../../prisma/generated/client';
import { GamesRepository } from '../../domain/interfaces/gamesRepository';

export const gamesRepositoryImpl: GamesRepository = {
  prisma: new PrismaClient(),

  async rollDice(
    dice1: number,
    dice2: number,
    isWinner: boolean,
    playerId: number
  ): Promise<IRollDice | null> {
    return await this.prisma.roll.create({
      data: {
        dice1: dice1,
        dice2: dice2,
        isWinner: isWinner,
        playerId: playerId,
      },
    });
  },

  async getRollsById(playerId: number): Promise<IRollDice[]> {
    return await this.prisma.roll.findMany({
      where: {
        playerId: playerId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  },

  async deleteRollsById(playerId: number): Promise<void> {
    await this.prisma.roll.deleteMany({
      where: {
        playerId,
      },
    });
  },

  async getPlayerById(playerId: number): Promise<IPlayer | null> {
    return await this.prisma.player.findFirst({
      where: {
        id: playerId,
      },
    });
  },
};
