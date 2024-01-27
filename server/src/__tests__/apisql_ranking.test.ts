import request from 'supertest';
import { app } from '../mysql/app';
import { PrismaClient } from '../../prisma/generated/client';

const prisma = new PrismaClient();
describe('Pruebas para el endpoint GET /ranking', () => {
  // Limpiar entidades después de todas las pruebas
  afterAll(async () => {
    try {
      await prisma.roll.deleteMany();
      await prisma.player.deleteMany();
    } catch (error) {
      console.error('Error al limpiar las entidades:', error);
    } finally {
      await prisma.$disconnect();
    }
  });

  it('Debería obtener el ranking y el porcentaje medio de exitos', async () => {
    await prisma.player.create({
      data: {
        name: 'Jugador1',
        rolls: {
          create: [
            { dice1: 1, dice2: 6, isWinner: true },
            { dice1: 5, dice2: 4, isWinner: false },
          ],
        },
      },
      include: {
        rolls: true,
      },
    });

    await prisma.player.create({
      data: {
        name: 'Jugador2',
        rolls: {
          create: [
            { dice1: 2, dice2: 3, isWinner: false },
            { dice1: 1, dice2: 6, isWinner: true },
          ],
        },
      },
      include: {
        rolls: true,
      },
    });

    const response = await request(app).get('/ranking');

    expect(response.statusCode).toBe(200);
    expect(response.body.ranking).toHaveLength(2);
    expect(response.body).toHaveProperty('ranking');
    expect(response.body).toHaveProperty('averageSuccessRate', 50);
  });
});

describe('Pruebas para el endpoint GET /ranking/loser', () => {
  // Limpiar entidades después de todas las pruebas
  afterAll(async () => {
    try {
      await prisma.roll.deleteMany();
      await prisma.player.deleteMany();
    } catch (error) {
      console.error('Error al limpiar las entidades:', error);
    } finally {
      await prisma.$disconnect();
    }
  });
  it('Debería obtener al jugador con el peor porcentaje de exito', async () => {
    await prisma.player.create({
      data: {
        name: 'Jugador1',
        rolls: {
          create: [
            { dice1: 1, dice2: 6, isWinner: true },
            { dice1: 4, dice2: 4, isWinner: false },
            { dice1: 6, dice2: 2, isWinner: false },
          ],
        },
      },
      include: {
        rolls: true,
      },
    });

    await prisma.player.create({
      data: {
        name: 'Jugador2',
        rolls: {
          create: [
            { dice1: 2, dice2: 3, isWinner: false },
            { dice1: 2, dice2: 3, isWinner: false },
            { dice1: 1, dice2: 6, isWinner: true },
            { dice1: 1, dice2: 6, isWinner: true },
          ],
        },
      },
      include: {
        rolls: true,
      },
    });

    const response = await request(app).get('/ranking/loser');

    expect(response.statusCode).toBe(200);
    expect(response.body.loser).toHaveProperty('id');
    expect(response.body.loser).toHaveProperty('name', 'Jugador1');
    expect(response.body.loser).toHaveProperty('successRate');
  });
});

describe('Pruebas para el endpoint GET /ranking/winner', () => {
  // Limpiar entidades después de todas las pruebas
  afterAll(async () => {
    try {
      await prisma.roll.deleteMany();
      await prisma.player.deleteMany();
    } catch (error) {
      console.error('Error al limpiar las entidades:', error);
    } finally {
      await prisma.$disconnect();
    }
  });
  it('Debería obtener al jugador con el mejor porcentaje de exito', async () => {
    await prisma.player.create({
      data: {
        name: 'Jugador1',
        rolls: {
          create: [
            { dice1: 1, dice2: 6, isWinner: true },
            { dice1: 4, dice2: 4, isWinner: false },
            { dice1: 6, dice2: 2, isWinner: false },
          ],
        },
      },
      include: {
        rolls: true,
      },
    });

    await prisma.player.create({
      data: {
        name: 'Jugador2',
        rolls: {
          create: [
            { dice1: 2, dice2: 3, isWinner: false },
            { dice1: 4, dice2: 3, isWinner: true },
            { dice1: 1, dice2: 6, isWinner: true },
          ],
        },
      },
      include: {
        rolls: true,
      },
    });

    const response = await request(app).get('/ranking/winner');

    expect(response.statusCode).toBe(200);
    expect(response.body.winner).toHaveProperty('id');
    expect(response.body.winner).toHaveProperty('name', 'Jugador2');
    expect(response.body.winner).toHaveProperty('successRate');
  });
});
