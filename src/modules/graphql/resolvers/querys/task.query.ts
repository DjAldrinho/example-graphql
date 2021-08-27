import { getAllTask } from '../../../../services/task.service';

export const taskQuery = {
  async getTasks() {
    return getAllTask();
  },
};
