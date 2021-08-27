import { UserModel } from '../../../../models/user.model';

export const userMutations = {
  async createUser(__: void, { user }: any) {
    const newUser = new UserModel(user);
    await newUser.save();
    return newUser;
  },
};
