import { tasks } from '../../../mocks/tasks.mock';
import { UserModel } from '../../../models/user.model';

export const Querys = {
  Query: {
    hello: (): string => {
      return 'Hello world with GraphQL!';
    },
    greet(__: void, args: {name: string}): string {
      return `Hello ${args.name}`;
    },
    tasks: () => {
      return tasks;
    },
    async users() {
      return UserModel.find();
    },
  },
};
