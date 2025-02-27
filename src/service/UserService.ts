import { UserAlreadyExists, UserEmailBlank, UserPasswordBlank, UserNotFound, InvalidUserUpdate, UserDeletionFailed } from "../error/CustomError";
import { User } from "../model/user/User";
import { UserRepo } from "../repo/UserRepo";

export const UserService = {
  async createUser(user: User) {
    try {
      const existingUser = await UserRepo.getUserByEmail(user.GetEmail());
      if (existingUser) {
        throw new UserAlreadyExists();
      }

      if (!user.GetEmail()) {
        throw new UserEmailBlank();
      }

      if (!user.GetPassword()) {
        throw new UserPasswordBlank();
      }

      // Aqui você pode adicionar mais validações de senha e email

      return await UserRepo.createUser(user);
    } catch (error: any) {
      throw error;
    }
  },

  async getUserByEmail(email: string) {
    if (!email) {
      throw new UserEmailBlank();
    }

    const user = await UserRepo.getUserByEmail(email);
    if (!user) {
      throw new UserNotFound();
    }
    return user;
  },

  async getAllUsers() {
    return await UserRepo.getAllUsers();
  },

  async updateUser(id: string, data: Partial<User>) {
    try {
      const existingUser = await UserRepo.getUserById(id);
      if (!existingUser) {
        throw new UserNotFound();
      }

      if (!data) {
        throw new InvalidUserUpdate();
      }

      return await UserRepo.updateUser(id, data);
    } catch (error: any) {
      throw error;
    }
  },

  async deleteUser(id: string) {
    try {
      const existingUser = await UserRepo.getUserById(id);
      if (!existingUser) {
        throw new UserNotFound();
      }

      return await UserRepo.deleteUser(id);
    } catch (error: any) {
      throw new UserDeletionFailed();
    }
  },

  async getUserById(id: string) {
    const user = await UserRepo.getUserById(id);
    if (!user) {
      throw new UserNotFound();
    }
    return user;
  },
};
