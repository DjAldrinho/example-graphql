import { Querys } from './query';
import { Mutations } from './mutation';


export const resolvers = {
  ...Querys,
  ...Mutations,
};
