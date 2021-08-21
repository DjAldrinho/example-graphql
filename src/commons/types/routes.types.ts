import { Method } from '@common/types/method.types';
import { RequestHandler as Middleware } from 'express';
import { Handler } from '@common/types/handler.types';

export type Route = {
  method: Method;
  path: string;
  middleware: Middleware[];
  handler: Handler;
};
