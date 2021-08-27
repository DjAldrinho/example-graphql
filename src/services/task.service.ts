import { TaskModel } from '../models/task.model';
import { getUserByID } from './user.service';

export async function getAllTask() {
  return TaskModel.find();
}


export async function getTask(taskID: string) {
  try {
    return await TaskModel.findById(taskID);
  } catch (err) {
    throw err;
  }
}

export async function getTasksByUser(userId: string) {
  try {
    return await TaskModel.find({ user: { $in: userId } });
  } catch (err) {
    throw err;
  }
}

export async function createTask(task: any) {
  try {
    if (!await checkIfTaskExist(task.title)) {
      const newTask = new TaskModel(task);
      await newTask.save();
      const user = await getUserByID(task.user);
      user.tasks.push(newTask);
      await user.save();
      return {
        ...newTask.toObject(),
        user: user,
      };
    }

    return null;
  } catch (err) {
    throw err;
  }
}


export async function checkIfTaskExist(title: string) {
  return await TaskModel.exists({ title });
}
