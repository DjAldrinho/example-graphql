import { taskMutations } from './task.mutation';
import { userMutations } from './user.mutation';


export const mutation = {
  Mutation: {
    ...taskMutations,
    ...userMutations,
  },
};
