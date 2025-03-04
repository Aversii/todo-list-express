import { Router } from 'express';
import { TaskController } from '../controller/TaskController';

const taskRouter = Router();
const asyncHandler = (fn: Function) => (req: any, res: any, next: any) =>
  Promise.resolve(fn(req, res, next)).catch(next);

taskRouter.get('/tasks', asyncHandler(TaskController.getAllTasks));
taskRouter.post('/tasks', asyncHandler(TaskController.createTask));
taskRouter.get('/tasks/:id', asyncHandler(TaskController.getTaskById));
taskRouter.get('/tasks/user/:userId', asyncHandler(TaskController.getTasksByUserId));
taskRouter.put('/tasks/:id', asyncHandler(TaskController.updateTask));
taskRouter.delete('/tasks/:id', asyncHandler(TaskController.deleteTask));

export default taskRouter;
