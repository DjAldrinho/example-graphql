import { createTask } from '../../../../services/task.service';


export const taskMutations = {
  async createTask(__: void, { task }: any) {
    return await createTask(task);
  },
};
