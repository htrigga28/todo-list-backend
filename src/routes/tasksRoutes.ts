import { Router } from 'express';
import Tasks from '../models/tasksModel';

export default (router: Router) => {
  // get all tasks
  router.get('/tasks', async (req, res) => {
    try {
      const tasks = await Tasks.find({});
      res.status(200).json(tasks);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
    // res.send('Tasks');
  });

  // create new task
  router.post('/tasks', async (req, res) => {
    try {
      const task = await Tasks.create(req.body);
      res.status(201).json(task);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // edit task description
  router.patch('/tasks/:taskId', async (req, res) => {
    const { title, description, done } = req.body;
    if (!title && !description && !done) {
      return res.status(400).json({ error: 'Missing fields' });
    }
    try {
      const task = await Tasks.updateOne(
        { _id: req.params.taskId },
        {
          title,
          description,
          done,
        }
      );
      res.status(201).json(task);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // delete task

  router.delete('/tasks/:taskId', async (req, res) => {
    try {
      const task = await Tasks.deleteOne({ _id: req.params.taskId });
      res.status(200).json(task);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });
};
