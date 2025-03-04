import {
    TaskNotFound,
    TaskDeletionFailed,
  } from "../error/CustomError";
  import { Task } from "../model/task/Task";
  import { TaskRepo } from "../repo/TaskRepo";
  
  export const TaskService = {
    async createTask(task: Task) {
      try {
        return await TaskRepo.createTask(task);
      } catch (error: any) {
        throw error;
      }
    },
  
    async getTaskById(id: string) {
      const task = await TaskRepo.getTaskById(id);
      if (!task) {
        throw new TaskNotFound();
      }
      return task;
    },
  
    async getAllTasks() {
      return await TaskRepo.getAllTasks();
    },
  
    async getTasksByUserId(userId: string) {
      const tasks = await TaskRepo.getTasksByUserId(userId);
      if (!tasks || tasks.length === 0) {
        throw new TaskNotFound();
      }
      return tasks;
    },
  
    async updateTask(id: string, data: Partial<Task>) {
      try {
        const existingTask = await TaskRepo.getTaskById(id);
        if (!existingTask) {
          throw new TaskNotFound();
        }
  
        return await TaskRepo.updateTask(id, data);
      } catch (error: any) {
        throw error;
      }
    },
  
    async deleteTask(id: string) {
      try {
        const existingTask = await TaskRepo.getTaskById(id);
        if (!existingTask) {
          throw new TaskNotFound();
        }
  
        return await TaskRepo.deleteTask(id);
      } catch (error: any) {
        throw new TaskDeletionFailed();
      }
    },
  };
  