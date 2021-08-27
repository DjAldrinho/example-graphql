import { makeExecutableSchema } from "graphql-tools";
import 'graphql-import-node';
import typeDefs from './schema.graphql';
import { resolvers } from '../resolvers/resolversMap';

export const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
