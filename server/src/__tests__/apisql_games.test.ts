import request from 'supertest';
import jwt from 'jsonwebtoken';
import { app } from '../mysql/app';
import { PrismaClient } from '../../prisma/generated/client';

const secretKey = process.env.SECRET || 'secret_word';
const prisma = new PrismaClient();

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

    const token = jwt.sign(
      {
        id: createdPlayer.id,
        name: createdPlayer.name,
      },
      secretKey,
      { expiresIn: '3m' }
    );

    const response = await request(app)
      .post(`/games/${createdPlayer.id}`)
      .set('Authorization', `Bearer ${token}`);

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
    const createdPlayer = await prisma.player.create({
      data: {
        name: 'NuevoJugador2',
      },
    });

    const token = jwt.sign(
      {
        id: createdPlayer.id,
        name: createdPlayer.name,
      },
      secretKey,
      { expiresIn: '3m' }
    );

    const response = await request(app)
      .post('/games/9999')
      .set('Authorization', `Bearer ${token}`);

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

    const token = jwt.sign(
      {
        id: createdPlayer.id,
        name: createdPlayer.name,
      },
      secretKey,
      { expiresIn: '3m' }
    );

    // Realizar una tirada
    await request(app)
      .post(`/games/${createdPlayer.id}`)
      .set('Authorization', `Bearer ${token}`);

    // Obtener la lista de tiradas del jugador
    const response = await request(app).get(`/games/${createdPlayer.id}`);

    const rollSchema = {
      id: expect.any(Number),
      createdAt: expect.any(String),
      dice1: expect.any(Number),
      dice2: expect.any(Number),
      isWinner: expect.any(Boolean),
      playerId: expect.any(Number),
    };

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveLength(1);
    expect(response.body[0]).toMatchObject(rollSchema);
  });

  it('Debería devolver error interno del servidor si ocurre un error', async () => {
    // Intentar eliminar tiradas de un jugador inexistente
    const response = await request(app).delete('/games/xxx');

    // Verificar el código de estado y el mensaje de respuesta
    expect(response.statusCode).toBe(500);
    expect(response.body).toHaveProperty(
      'message',
      'Error interno del servidor:'
    );
  });
});

describe('Pruebas para el endpoint DELETE /games/:id', () => {
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

  it('Debería eliminar todas las tiradas de un jugador', async () => {
    // Crear un nuevo jugador
    const newPlayer = await prisma.player.create({
      data: {
        name: 'NuevoJugador',
      },
    });

    // Realizar una tirada
    await request(app).post(`/games/${newPlayer.id}`);

    // Realizar la petición para eliminar las tiradas del jugador
    const response = await request(app).delete(`/games/${newPlayer.id}`);

    // Verificar el código de estado y el mensaje de respuesta
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty(
      'message',
      'Tiradas eliminadas exitosamente'
    );

    // Verificar que no hay tiradas asociadas al jugador después de la eliminación
    const rollsAfterDeletion = await prisma.roll.findMany({
      where: {
        playerId: newPlayer.id,
      },
    });

    expect(rollsAfterDeletion).toHaveLength(0);
  });

  it('Debería devolver error interno del servidor si ocurre un error', async () => {
    // Intentar eliminar tiradas de un jugador inexistente
    const response = await request(app).delete('/games/xxx');

    // Verificar el código de estado y el mensaje de respuesta
    expect(response.statusCode).toBe(500);
    expect(response.body).toHaveProperty(
      'message',
      'Error interno del servidor:'
    );
  });
});
