import request from 'supertest';
import { app } from '../mysql/app';
import { PrismaClient } from '../../prisma/generated/client';

const prisma = new PrismaClient();

describe('Pruebas para el endpoint POST /players', () => {
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

  it('Deberia crear un nuevo jugador', async () => {
    const response = await request(app)
      .post('/players')
      .send({ name: 'NuevoJugador' });

    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe('NuevoJugador');
  });

  it('Deberia devolver el error en el caso que ya exista el jugador', async () => {
    await prisma.player.create({
      data: {
        name: 'NuevoJugador2',
      },
    });

    const response = await request(app)
      .post('/players')
      .send({ name: 'NuevoJugador2' });

    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({
      error: 'Ya existe un jugador con este nombre!',
    });
  });
});

describe('Pruebas para el endpoint PUT /players/:id', () => {
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

  it('Deberia modificar el nombre del jugador', async () => {
    const createdPlayer = await prisma.player.create({
      data: {
        name: 'JugadorOriginal',
      },
    });

    const response = await request(app)
      .put(`/players/${createdPlayer.id}`)
      .send({ name: 'NuevoNombre' });

    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe('NuevoNombre');
  });

  it('Deberia devolver error en el caso de un jugador no encontrado', async () => {
    const response = await request(app)
      .put('/players/9999')
      .send({ name: 'NuevoNombre' });

    expect(response.statusCode).toBe(404);
    expect(response.body).toEqual({ error: 'Jugador no encontrado' });
  });
});

describe('Pruebas para el endpoint GET /players', () => {
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

  it('Deberia obtener todos los jugadores con sus tiradas y porcentaje de exito', async () => {
    const player1 = await prisma.player.create({
      data: {
        name: 'Jugador1',
        rolls: {
          create: [
            { dice1: 1, dice2: 6, isWinner: true },
            { dice1: 3, dice2: 4, isWinner: false },
          ],
        },
      },
      include: {
        rolls: true,
      },
    });

    const player2 = await prisma.player.create({
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

    const response = await request(app).get('/players');

    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual([
      {
        id: player1.id,
        name: 'Jugador1',
        successPercentage: 50,
      },
      {
        id: player2.id,
        name: 'Jugador2',
        successPercentage: 50,
      },
    ]);
  });
});
