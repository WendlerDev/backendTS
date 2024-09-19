import { Request, Response } from "express";
import { UserService } from "../dominio/services/UserService";

const userService = new UserService();

export class UserController {
  static async addUser(request: Request, response: Response) {
    try {
      const { name, active, timeClasses, contact, externalData } = request.body;

      const user = await userService.addUser({
        name,
        active,
        timeClasses,
        contact,
        externalData,
      });

      response.status(201).json(user);
    } catch (error) {
      return response.status(400).json({ message: (error as Error).message });
    }
  }

  static async getUserById(request: Request, response: Response) {
    try {
      const { id } = request.body;

      const user = await userService.getUserById(id);

      response.status(200).json(user);
    } catch (error) {
      return response.status(400).json({ message: (error as Error).message });
    }
  }

  static async getUsersByName(request: Request, response: Response) {
    try {
      const { name } = request.body;

      const user = await userService.getUsersByName(name);

      response.status(200).json(user);
    } catch (error) {
      return response.status(400).json({ message: (error as Error).message });
    }
  }

  static async deleteUserById(request: Request, response: Response) {
    try {
      const { id } = request.body;

      const user = await userService.deleteUserById(id);

      response.status(200).json(user);
    } catch (error) {
      return response.status(400).json({ message: (error as Error).message });
    }
  }

  static async updateUserById(request: Request, response: Response) {
    try {
      const { id, dados } = request.body;

      const user = await userService.updateUserById(id, dados);

      response.status(200).json(user);
    } catch (error) {
      return response.status(400).json({ message: (error as Error).message });
    }
  }

  static async getUsers(request: Request, response: Response) {
    try {
      const users = await userService.getUsers();

      response.status(200).json(users);
    } catch (error) {
      return response.status(400).json({ message: (error as Error).message });
    }
  }
}
