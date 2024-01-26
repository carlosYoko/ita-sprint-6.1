// nuevo

import { IPlayer } from 'mysql/domain/entities/player';
import { PrismaClient } from '../../../../prisma/generated/client';
import { PlayerRepository } from 'mysql/domain/interfaces/playerRepository';

export const PlayerRepositoryImpl: PlayerRepository = {
  prisma: new PrismaClient(),

  async findPlayerByName(name: string): Promise<IPlayer | null> {
    return await this.prisma.player.findFirst({
      where: {
        name: name.trim(),
        NOT: {
          name: 'ANONIMO',
        },
      },
    });
  },

  async createPlayer(data: { name: string }): Promise<IPlayer> {
    return await this.prisma.player.create({
      data: {
        name: data.name.trim() || 'ANONIMO',
      },
    });
  },
};
