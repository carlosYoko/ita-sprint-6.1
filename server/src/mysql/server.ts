import { app } from './app';
import { PrismaClient } from '../../prisma/generated/client';
import { initializeApp } from './application/init';

const prisma = new PrismaClient();
initializeApp(app, prisma);

const PORT = 3000;
app.listen(PORT, () => {
  console.log('Servidor escuchando en puerto ', PORT);
});
