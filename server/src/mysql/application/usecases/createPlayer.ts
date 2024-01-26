// import { PrismaClient } from '../../../../prisma/generated/client';
// import { Player } from 'mysql/domain/entities/player';

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
