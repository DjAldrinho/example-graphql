import { tasks } from '@modules/graphql/tasks.example';
import { UserModel } from '@models/user.model';

export const resolvers = {
  Query: {
    hello: () => {
      return 'Hello world with GraphQL!';
    },
    greet(root, args) {
      return `Hello ${args.name}`;
    },
    tasks: () => {
      return tasks;
    },
    async users() {
      return UserModel.find();
    },
  },
  Mutation: {
    createTask(_, { input }) {
      input._id = tasks.length;
      tasks.push(input);
      return input;
    },
    async createUser(_, { input }) {
      const user = new UserModel(input);
      await user.save();
      return user;
    },
  },
};
