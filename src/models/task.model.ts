import * as mongoose from 'mongoose';
import { model, Schema } from 'mongoose';

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

export const TaskModel = model('Task', taskSchema);




