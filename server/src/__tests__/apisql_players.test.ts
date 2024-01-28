import request from 'supertest';
import { app } from '../mysql/app';
import { PrismaClient } from '../../prisma/generated/client';
import jwt from 'jsonwebtoken';

const secretKey = process.env.SECRET || 'secret_word';
const prisma = new PrismaClient();

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

  it('Deberia crear un nuevo jugador', async () => {
    // Crear nuevo jugador
    const response = await request(app)
      .post('/players')
      .send({ name: 'NuevoJugador' });

    expect(response.statusCode).toBe(201);
    expect(response.body.player.name).toBe('NuevoJugador');
  });

  it('Deberia dar error de token no proporcionado', async () => {
    // Crear nuevo jugador
    const createdPlayer = await prisma.player.create({
      data: {
        name: 'JugadorOriginal',
      },
    });

    const response = await request(app)
      .put(`/players/${createdPlayer.id}`)
      .send({ name: 'NuevoNombre' });

    expect(response.statusCode).toBe(401);
    expect(response.body).toEqual({ error: 'Token no proporcionado' });
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

  it('Deberia cambiar el nombre del jugador', async () => {
    // Crear un nuevo jugador
    const createdPlayer = await prisma.player.create({
      data: {
        name: 'NuevoJugador3',
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
      .put(`/players/${createdPlayer.id}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'NuevoJugador4' });

    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe('NuevoJugador4');
  });
});
