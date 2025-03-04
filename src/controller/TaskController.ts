import { Request, Response } from "express";
import { TaskService } from "../service/TaskService";
import { Task } from "../model/task/Task";
import Authenticator from "../service/auth/Authenticator";

export const TaskController = {
  async createTask(req: Request, res: Response): Promise<Response> {
    try {
      const { title, description, status } = req.body;
      const token = req.header("Authorization");

      if (!token) {
        return res.status(401).json({ message: "Token não fornecido" });
      }

      const { id: userId } = Authenticator.getTokenData(token);

      const data = await Task.create(title, description, status, userId);
      const createdTask = await TaskService.createTask(data);

      return res.status(201).json(createdTask);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async getAllTasks(req: Request, res: Response): Promise<Response> {
    try {
      const token = req.header("Authorization");

      if (!token) {
        return res.status(401).json({ message: "Token não fornecido" });
      }

      const { id: userId } = Authenticator.getTokenData(token);

      const tasks = await TaskService.getTasksByUserId(userId);
      return res.status(200).json(tasks);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async getTaskById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const token = req.header("Authorization");

      if (!token) {
        return res.status(401).json({ message: "Token não fornecido" });
      }

      Authenticator.getTokenData(token);

      const task = await TaskService.getTaskById(id);
      return res.status(200).json(task);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async getTasksByUserId(req: Request, res: Response): Promise<Response> {
    try {
      const { userId } = req.params;  // Pega o userId da URL
      const token = req.header("Authorization");

      if (!token) {
        return res.status(401).json({ message: "Token não fornecido" });
      }

      Authenticator.getTokenData(token);

      const tasks = await TaskService.getTasksByUserId(userId);
      return res.status(200).json(tasks);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async updateTask(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const data = req.body;
      const token = req.header("Authorization");

      if (!token) {
        return res.status(401).json({ message: "Token não fornecido" });
      }

      Authenticator.getTokenData(token);

      const updatedTask = await TaskService.updateTask(id, data);
      return res.status(200).json(updatedTask);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async deleteTask(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const token = req.header("Authorization");

      if (!token) {
        return res.status(401).json({ message: "Token não fornecido" });
      }

      Authenticator.getTokenData(token);

      await TaskService.deleteTask(id);
      return res.status(204).send();
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  }
};
