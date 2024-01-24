import request from 'supertest';
import { app } from '../mysql/endpoints';
import { prisma } from '../mysql/endpoints';

describe('Pruebas para el endpoint POST /games/:id', () => {
  // Limpiar entidades despues de todas las pruebas
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

  it('Debería realizar la tirada de dos dados y almacenarla', async () => {
    // Crear un nuevo jugador
    const createdPlayer = await prisma.player.create({
      data: {
        name: 'NuevoJugador',
      },
    });

    const response = await request(app).post(`/games/${createdPlayer.id}`);

    const storedRoll = await prisma.roll.findUnique({
      where: {
        id: response.body.id,
      },
    });

    expect(storedRoll?.dice1).toBe(response.body.dice1);
    expect(storedRoll?.dice2).toBe(response.body.dice2);
    expect(storedRoll?.isWinner).toBe(response.body.isWinner);
    expect(storedRoll?.playerId).toBe(createdPlayer.id);
  });

  it('Debería devolver error interno del servidor', async () => {
    const response = await request(app).post('/games/9999');

    expect(response.statusCode).toBe(500);
    expect(response.body).toHaveProperty(
      'message',
      'Error interno del servidor:'
    );
  });
});

describe('Pruebas para el endpoint GET /games/:id', () => {
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

  it('Debería obtener la lista de tiradas de un jugador', async () => {
    // Crear un nuevo jugador
    const createdPlayer = await prisma.player.create({
      data: {
        name: 'NuevoJugador',
      },
    });

    // Realizar una tirada
    await request(app).post(`/games/${createdPlayer.id}`);

    // Obtener la lista de tiradas del jugador
    const responseGet = await request(app).get(`/games/${createdPlayer.id}`);

    const rollSchema = {
      id: expect.any(Number),
      createdAt: expect.any(String),
      dice1: expect.any(Number),
      dice2: expect.any(Number),
      isWinner: expect.any(Boolean),
      playerId: expect.any(Number),
    };

    expect(responseGet.statusCode).toBe(200);
    expect(responseGet.body).toHaveLength(1);
    expect(responseGet.body[0]).toMatchObject(rollSchema);
  });
});
