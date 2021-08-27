import { query } from './querys/query';
import { mutation } from './mutations/mutation';
import { types } from './types/types';


export const resolvers = {
  ...query,
  ...types,
  ...mutation,
};
