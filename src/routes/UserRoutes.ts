import { Router } from 'express';
import { UserController } from '../controller/UserController';

const userRouter = Router();
const asyncHandler = (fn: Function) => (req: any, res: any, next: any) =>
  Promise.resolve(fn(req, res, next)).catch(next);

userRouter.get('/users', asyncHandler(UserController.getAllUsers)); 
userRouter.post('/users', asyncHandler(UserController.createUser));
userRouter.get('/users/:email', asyncHandler(UserController.getUserByEmail)); 
userRouter.get('/users/id/:id', asyncHandler(UserController.getUserById)); 
userRouter.put('/users/:id', asyncHandler(UserController.updateUser));
userRouter.delete('/users/:id', asyncHandler(UserController.deleteUser));

export default userRouter;