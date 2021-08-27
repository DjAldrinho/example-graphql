/*export const resolvers = {
  Query: {
    hello: () => {
      return 'Hello world with GraphQL!';
    },
    greet(root: any, args: { name: any; }) {
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
    createTask(_, input: any) {
      input._id = tasks.length;
      tasks.push(input);
      return input;
    },
    async createUser(_, input: any) {
      const user = new UserModel(input);
      await user.save();
      return user;
    },
  },
};
 */
