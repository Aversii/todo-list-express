import { Request, Response } from "express";
import { UserService } from "../service/UserService";
import { User } from "../model/user/User";
import { UserValidations } from './../model/validations/UserValidations';
import Authenticator from "../service/auth/Authenticator";

export const UserController = {
  async createUser(req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, password } = req.body;

      UserValidations.ExecUserValidations(name, password, email);
      const user = new User(name, password, email);
      const createdUser = await UserService.createUser(user);
      const token = Authenticator.generateToken({ id: user.GetId(), email: user.GetEmail() });

      return res.status(201).json({ createdUser, token });
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async getUserByEmail(req: Request, res: Response): Promise<Response> {
    try {
      const { email } = req.params;

      const token = req.header("Authorization");

      if (!token) {
        return res.status(401).json({ message: "Token não fornecido" });
      }

      Authenticator.getTokenData(token);

      UserValidations.VerifyEmail(email);
      const user = await UserService.getUserByEmail(email);
      return res.status(200).json(user);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async getAllUsers(req: Request, res: Response): Promise<Response> {
    try {
      const token = req.header("Authorization");

      if (!token) {
        return res.status(401).json({ message: "Token não fornecido" });
      }

      Authenticator.getTokenData(token);

      const users = await UserService.getAllUsers();
      return res.status(200).json(users);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async updateUser(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const data = req.body;
      const token = req.header("Authorization");

      if (!token) {
        return res.status(401).json({ message: "Token não fornecido" });
      }

      Authenticator.getTokenData(token);

      const updatedUser = await UserService.updateUser(id, data);
      return res.status(200).json(updatedUser);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async deleteUser(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const token = req.header("Authorization");

      if (!token) {
        return res.status(401).json({ message: "Token não fornecido" });
      }

      Authenticator.getTokenData(token);

      await UserService.deleteUser(id);
      return res.status(204).send();
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async getUserById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const token = req.header("Authorization");

      if (!token) {
        return res.status(401).json({ message: "Token não fornecido" });
      }

      Authenticator.getTokenData(token);

      const user = await UserService.getUserById(id);
      return res.status(200).json(user);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  },
};
