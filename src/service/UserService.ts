import {
  UserAlreadyExists,
  UserEmailBlank,
  UserNotFound,
  InvalidUserUpdate,
  UserDeletionFailed,
  InvalidRequest_WrongPassword,
} from "../error/CustomError";
import { User } from "../model/user/User";
import { UserRepo } from "../repo/UserRepo";
import HashManagerService from "./hashManager/HashManagerService";

export const UserService = {
  async createUser(user: User) {
    try {
      const existingUser = await UserRepo.getUserByEmail(user.GetEmail());
      if (existingUser) {
        throw new UserAlreadyExists();
      }

      return await UserRepo.createUser(user);
    } catch (error: any) {
      throw error;
    }
  },

  async login(email: string, password: string) {
    const existingUser = await UserRepo.getUserByEmail(email);

    if (!existingUser) {
      throw new UserAlreadyExists();
    }

    const isPasswordValid = await HashManagerService.compareHash(
      password,
      existingUser.password
    );
    if (!isPasswordValid) {
      throw new InvalidRequest_WrongPassword();
    }

    return existingUser;
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
