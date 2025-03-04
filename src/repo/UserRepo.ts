import { User } from "../model/user/User";
import prisma from "./PrismaClient/PrismaClient";

export const UserRepo = {
  async createUser(user: User) {
    return await prisma.user.create({
      data: {
        id: user.GetId(),
        email: user.GetEmail(),
        name: user.GetName(),
        password: user.GetPassword(),
      },
    });
  },

  async getUserByEmail(email: string) {
    return await prisma.user.findUnique({
      where: { email },
    });
  },

  async getAllUsers() {
    return await prisma.user.findMany();
  },

  async updateUser(id: string, data: Partial<User>) {
    return await prisma.user.update({
      where: { id },
      data,
    });
  },

  async deleteUser(id: string) {
    return await prisma.user.delete({
      where: { id },
    });
  },

  async getUserById(id: string) {
    return await prisma.user.findUnique({
      where: { id },
    });
  },

  async getUserByEmailAndPassword(email: string, password: string) {
    return await prisma.user.findFirst({
      where: {
        AND: [
          { email },
          { password },
        ],
      },
    });
  
  }
}
