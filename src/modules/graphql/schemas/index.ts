import 'graphql-import-node';
import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from '../resolvers/resolversMap';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';


const typeDefs = mergeTypes(fileLoader(`${__dirname}/**/*.graphql`), { all: true });

export const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
