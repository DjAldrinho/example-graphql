import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { connect } from './config/database';
import { errorHandler } from './commons/errors-handler/error-handler';
import { appRoutes } from './modules/routes';


const app = express();
const port = 3000;

//Connecting to DB
connect()
  .then(r => console.log('>>> DB is Connected')).catch((error)  =>  console.log(error));

/*app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));*/

//Routes
appRoutes(app);

//Handlers
app.use(errorHandler);


// Start the express server
app.listen(port, () => {
  console.log(`Local server started at http://localhost:${port}`);
});
