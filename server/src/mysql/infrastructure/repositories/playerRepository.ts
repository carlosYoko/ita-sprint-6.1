// import { PrismaClient } from '../../../../prisma/generated/client';
// import { Player } from '../../../../prisma/generated/client';

// export const findPlayerByName = async (
//   prisma: PrismaClient,
//   name: string
// ): Promise<Player | null> => {
//   return await prisma.player.findFirst({
//     where: {
//       name: name.trim(),
//       NOT: {
//         name: 'ANONIMO',
//       },
//     },
//   });
// };

// export const createNewPlayer = async (
//   prisma: PrismaClient,
//   name: string
// ): Promise<Player> => {
//   return await prisma.player.create({
//     data: {
//       name: name.trim() || 'ANONIMO',
//     },
//   });
// };
