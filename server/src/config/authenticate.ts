import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const secretKey = 'secret_word';

export const authenticateMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send({ message: 'Token no proporcionado' });
  }

  try {
    const decodedToken = jwt.verify(token, secretKey);
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).send({ message: 'Token Invalido' });
  }
};
