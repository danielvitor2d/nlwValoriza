import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

  // Receber o token
  const authToken = request.headers.authorization;

  // Validar se o token está preenchido
  if (!authToken) {
    return response.status(401).end();
  }

  // Validar se token é válido
  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, "5f3e412a4aaa4145d765ed4e191d3a01") as IPayload;
    // Recuperar informações do usuário
    request.user_id = sub;
    return next();
  } catch (err) {
    return response.status(401).end();
  }
}