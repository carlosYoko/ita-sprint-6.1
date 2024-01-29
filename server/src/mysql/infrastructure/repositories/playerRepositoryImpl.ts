import { IPlayer } from '../../domain/entities/player';
import { IPlayerWithRolls } from '../../domain/entities/rolls';
import { PlayerRepository } from '../../domain/interfaces/playerRepository';
import { PrismaClient } from '../../../../prisma/generated/client';

export const playerRepositoryImpl: PlayerRepository = {
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

  async findPlayerByID(playerId: number): Promise<IPlayer> {
    const foundPlayer = await this.prisma.player.findUnique({
      where: {
        id: playerId,
      },
    });

    if (!foundPlayer) {
      throw new Error('Jugador no encontrado');
    }

    return foundPlayer;
  },

  async createPlayer(name: string): Promise<IPlayer> {
    return await this.prisma.player.create({
      data: {
        name: name.trim() || 'ANONIMO',
      },
    });
  },

  async existingPlayer(playerId: number): Promise<IPlayer | null> {
    return await this.prisma.player.findUnique({
      where: {
        id: playerId,
      },
    });
  },

  async existingName(name: string, playerId: number): Promise<IPlayer | null> {
    return await this.prisma.player.findFirst({
      where: {
        name: name,
        id: {
          not: {
            equals: playerId,
          },
        },
      },
    });
  },

  async updatePlayerName(
    name: string,
    playerId: number
  ): Promise<IPlayer | null> {
    return await this.prisma.player.update({
      where: {
        id: playerId,
      },
      data: {
        name: name || 'ANONIMO',
      },
    });
  },

  async getAllPlayersAndRolls(): Promise<IPlayerWithRolls[] | null> {
    return await this.prisma.player.findMany({
      include: {
        rolls: true,
      },
    });
  },
};
