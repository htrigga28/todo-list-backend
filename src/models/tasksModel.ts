import mongoose from 'mongoose';

const tasksSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const Tasks = mongoose.model('Tasks', tasksSchema);

export default Tasks;
