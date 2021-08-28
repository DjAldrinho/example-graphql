import { createUser } from '../../../../services/user.service';

export const userMutations = {
  async createUser(__: void, { user }: any) {
    return await createUser(user);
  },
};
