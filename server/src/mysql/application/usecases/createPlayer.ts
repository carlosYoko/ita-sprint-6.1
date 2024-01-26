import { PrismaClient } from '../../../../prisma/generated/client';
// import { Player } from 'mysql/domain/entities/player';

import { playerRepository } from 'mysql/infrastructure/repositories/playerRepository';

export const createPlayer = async (prisma: PrismaClient, name: string) => {
  try {
    const existingPlayer = await playerRepository.findPlayerByName(
      prisma,
      name
    );

    if (!existingPlayer) {
      const newPlayer = await playerRepository.createNewPlayer(prisma, name);
      return newPlayer;
    } else {
      throw new Error('Ya existe un jugador con este nombre!');
    }
  } catch (error) {
    // Manejo de errores
  }
};

// export const createPlayer = async (
//   prisma: PrismaClient,
//   name: string
// ): Promise<Player> => {
//   const existingPlayer = await prisma.player.findFirst({
//     where: {
//       name: name.trim(),
//       NOT: {
//         name: 'ANONIMO',
//       },
//     },
//   });

//   if (!existingPlayer) {
//     const newPlayer = await prisma.player.create({
//       data: {
//         name: name.trim() || 'ANONIMO',
//       },
//     });
//     return newPlayer;
//   } else {
//     throw new Error('Ya existe un jugador con este nombre!');
//   }
// };
