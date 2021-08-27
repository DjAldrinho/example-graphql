import express from 'express';
import { connect } from './config/database';
import { errorHandler } from './commons/errors-handler/error-handler';
import { appRoutes } from './modules/routes';
import compression from 'compression';
import { schema } from './modules/graphql/schemas';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';


const app = express();

//Cors
app.use(cors({origin: true}));

//Routes
appRoutes(app);

//Handlers
app.use(errorHandler);

//Compression
app.use(compression());

const port = 5300;

//Connecting to DB
connect()
  .then(r => console.log('>>> DB is Connected')).catch((error) => console.log(error));

const server = new ApolloServer({
  schema,
  introspection: true
});

server.applyMiddleware({app});

const httpServer = createServer(app);

// Start the express server
httpServer.listen(port, () => {
  console.log(`Local server started at http://localhost:${port}`);
});
