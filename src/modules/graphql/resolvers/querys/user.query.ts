import { getAllUsers, getUserByID } from '../../../../services/user.service';

export const userQuery = {
  async getUsers() {
    return await getAllUsers();
  },
  async getUser(__: void, { user }: any) {
    return await getUserByID(user);
  },
};
