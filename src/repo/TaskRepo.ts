import { Task } from "../model/task/Task";
import prisma from "./PrismaClient/PrismaClient";

export const TaskRepo = {
  async createTask(task: Task) {
    return await prisma.task.create({
      data: {
        id: task.GetId(),
        title: task.GetTitle(),
        description: task.GetDescription(),
        status: task.GetStatus(),
        createdAt: task.GetCreatedAt(),
        updatedAt: task.GetUpdatedAt(),
        userId: task.GetUserId(),
      },
    });
  },

  async getTaskById(id: string) {
    return await prisma.task.findUnique({
      where: { id },
    });
  },

  async getAllTasks() {
    return await prisma.task.findMany();
  },

  async getTasksByUserId(userId: string) {
    return await prisma.task.findMany({
      where: { userId },
    });
  },

  async updateTask(id: string, data: Partial<Task>) {
    return await prisma.task.update({
      where: { id },
      data: {
        title: data.GetTitle ? data.GetTitle() : undefined,
        description: data.GetDescription ? data.GetDescription() : undefined,
        status: data.GetStatus ? data.GetStatus() : undefined,

        updatedAt: new Date(),
      },
    });
  },

  async deleteTask(id: string) {
    return await prisma.task.delete({
      where: { id },
    });
  },
};
