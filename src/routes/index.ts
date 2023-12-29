import { Router } from 'express';
import tasksRoutes from './tasksRoutes';

const router = Router();

export default () => {
  tasksRoutes(router);
  return router;
};
