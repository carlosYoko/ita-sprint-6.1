import jwt, { TokenExpiredError } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const secretKey = process.env.SECRET || 'secret_word';

declare global {
  namespace Express {
    interface Request {
      user?: unknown;
    }
  }
}

export const authenticateMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).send({ error: 'Token no proporcionado' });
  }

  try {
    const decodedToken: unknown = jwt.verify(token, secretKey);

    req.user = decodedToken;

    next();
  } catch (error) {
    console.error('Error al verificar el token:', error);

    if (error instanceof TokenExpiredError) {
      return res.status(401).send({ error: 'Token ha expirado' });
    }

    return res.status(401).send({ error: 'Token inválido' });
  }
};
