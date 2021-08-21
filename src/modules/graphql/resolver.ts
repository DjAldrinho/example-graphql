import { tasks } from '@modules/graphql/tasks.example';

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
  },
  Mutation: {
    createTask(_, { input }) {
        input._id = tasks.length;
        tasks.push(input);
        return input;
    },
  },
};
