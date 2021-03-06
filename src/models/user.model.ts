import * as mongoose from 'mongoose';
import { model, Schema } from 'mongoose';

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  tasks: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Task' },
  ],
});

export const UserModel = model('User', userSchema);




