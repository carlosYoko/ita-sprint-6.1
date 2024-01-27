import { IPlayer } from '../../domain/entities/player';
import { PrismaClient } from '../../../../prisma/generated/client';
import { PlayerRepository } from '../../domain/interfaces/playerRepository';

export const playerRepositoryImpl: PlayerRepository = {
  prisma: new PrismaClient(),

  async wellcome() {
    return 'Wellcome to API!';
  },

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
};
