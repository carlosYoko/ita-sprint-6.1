import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const authenticateMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).send({ error: 'Token no proporcionado' });
  }

  try {
    // Verifica y decodifica el token
    const decodedToken: any = jwt.verify(token, 'tu_secreto'); // Reemplaza 'tu_secreto' con tu clave secreta

    // Agrega la información del usuario al objeto req.user
    req.user = decodedToken;

    next(); // Continúa con la siguiente función en la cadena de middleware
  } catch (error) {
    return res.status(401).send({ error: 'Token inválido' });
  }
};
