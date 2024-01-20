import request from 'supertest';
import { app } from '../mysql/endpoints';
import { PrismaClient } from '../../prisma/generated/client';

const prisma = new PrismaClient();

describe('Pruebas para el endpoint POST /players', () => {
  afterAll(async () => {
    try {
      await prisma.$executeRaw`DELETE FROM \`Roll\`;`;

      await prisma.$executeRaw`DELETE FROM \`Player\`;`;

      await prisma.$disconnect();
    } catch (error) {
      console.error('Error al limpiar las entidades:', error);
    }
  });

  it('Deberia crear un nuevo jugador', async () => {
    const response = await request(app)
      .post('/players')
      .send({ name: 'NuevoJugador' });

    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe('NuevoJugador');
  });

  it('Deberia devolver el error en caso de que exista el nombre', async () => {
    // Crear un jugador con el mismo nombre antes de la prueba
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
      message: 'Ya existe un jugador con este nombre!',
    });
  });
});

describe('Pruebas para el endpoint PUT /players/:id', () => {
  afterAll(async () => {
    try {
      await prisma.$executeRaw`DELETE FROM \`Roll\`;`;

      await prisma.$executeRaw`DELETE FROM \`Player\`;`;

      await prisma.$disconnect();
    } catch (error) {
      console.error('Error al limpiar las entidades:', error);
    }
  });

  it('Deberia modificar el nombre del jugador', async () => {
    // Crear un jugador antes de la prueba
    const createdPlayer = await prisma.player.create({
      data: {
        name: 'JugadorOriginal',
      },
    });

    const response = await request(app)
      .put(`/players/${createdPlayer.id}`)
      .send({ name: 'NuevoNombre' });

    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe('NuevoNombre');
  });

  it('Deberia devolver error en el caso de un jugador no encontrado', async () => {
    const response = await request(app)
      .put('/players/999')
      .send({ name: 'NuevoNombre' });

    expect(response.statusCode).toBe(404);
    expect(response.body).toEqual({ error: 'Jugador no encontrado' });
  });
});

describe('Pruebas para el endpoint GET /players', () => {
  afterAll(async () => {
    try {
      await prisma.$executeRaw`DELETE FROM \`Roll\`;`;

      await prisma.$executeRaw`DELETE FROM \`Player\`;`;

      await prisma.$disconnect();
    } catch (error) {
      console.error('Error al limpiar las entidades:', error);
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

    expect(response.statusCode).toBe(200);
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
