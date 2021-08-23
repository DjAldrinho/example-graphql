import express from 'express';
import { errorHandler } from '@common/errors-handler/error-handler';
import { routes } from '@common/routes';
import { graphqlHTTP } from 'express-graphql';
import { schema } from '@modules/graphql/schema';
import { connect } from '@base/config/database';


const app = express();
const port = 3000; // default port to listen

//Connecting to DB
connect();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.use(errorHandler); // registration of handler

routes.forEach((route) => {
  const { method, path, middleware, handler } = route;
  app[method](path, ...middleware, handler);
});

// start the express server
app.listen(port, () => {
  console.log(`Local server started at http://localhost:${port}`);
});
