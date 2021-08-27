import { UserModel } from '../../../models/user.model';
import { tasks } from '../../../mocks/tasks.mock';


export const Mutations = {
  Mutation: {
    createTask(__: void, { task }: any): any {
      task._id = tasks.length;
      tasks.push(task);
      return task;
    },

    async createUser(__: void, { user }: any) {
      const newUser = new UserModel(user);
      await newUser.save();
      return newUser;
    },
  },
};
