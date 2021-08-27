import { Application } from 'express';
import { homeRoutes } from './home/home.routes';

export function appRoutes(app: Application) {
  app.use('/', homeRoutes);
}
