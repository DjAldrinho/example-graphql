import { Route } from '@common/types/routes.types';
import { requestLogger } from '@middleware/request-logger.middleware';
import { welcome } from '@modules/home/home.controller.js';

export const routes: Route[] = [
  {
    method: 'get',
    path: '/',
    middleware: [requestLogger],
    handler: welcome,
  },
];
