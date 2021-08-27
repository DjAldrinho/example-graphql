import { Request, Response } from 'express';


export function welcome(req: Request, res: Response): Response {
  return res.send('Welcome to app!');
}

export function greet(req: Request, res: Response): Response {
  return res.send('Say Hi!');
}


export function sayGoodBye(req: Request, res: Response): Response {
  return res.send('Say Good Bye!');
}
