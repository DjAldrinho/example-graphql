import { userQuery } from './user.query';
import { taskQuery } from './task.query';


export const query = {
  Query: {
    ...userQuery,
    ...taskQuery,
  },
};
