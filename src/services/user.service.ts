import { UserModel } from '../models/user.model';

export async function getAllUsers() {
  return UserModel.find().populate('tasks');
}

export async function getUserByID(userID: string) {
  try {
    return await UserModel.findById(userID).populate('tasks');
  } catch (err) {
    throw err;
  }
}

export async function createUser(user: any) {
  try {
    const newUser = new UserModel(user);
    await newUser.save();
    return newUser;
  } catch (err) {
    throw err;
  }
}

