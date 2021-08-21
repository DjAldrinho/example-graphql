import express from 'express';
import { errorHandler } from '@common/errors-handler/error-handler';
import { routes } from '@common/routes';

const app = express();
const port = 3000; // default port to listen

app.use(errorHandler); // registration of handler

routes.forEach((route) => {
  const { method, path, middleware, handler } = route;
  app[method](path, ...middleware, handler);
});

// start the express server
app.listen(port, () => {
  console.log(`Local server started at http://localhost:${port}`);
});
