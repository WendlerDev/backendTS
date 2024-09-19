import { ObjectId } from "mongoose";
import { UserRepository } from "../../infra/repositories/UserRepository";
import { IUser, UserDocument } from "../../models/UserModel";

export class UserService {
  private userRepository: UserRepository;
  static userRepository: any;

  constructor() {
    this.userRepository = new UserRepository();
  }
  static getId(id: number): UserDocument | undefined {
    const user = this.userRepository.findUserById(id);
    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }

  async addUser({ name, active, timeClasses, contact, externalData }: IUser) {
    if (!name) throw new Error("Name is mandatory");

    const user = await this.userRepository.saveUser({
      name,
      active,
      timeClasses,
      contact,
      externalData,
    });

    return user;
  }

  async getUserById(id: ObjectId) {
    if (!id) throw new Error("ID not found");

    const user = await this.userRepository.findUserById(id);
    return user;
  }

  async getUsersByName(name: String) {
    const user = await this.userRepository.findUsersByName(name);
    return user;
  }

  async deleteUserById(id: ObjectId) {
    const user = await this.userRepository.deleteUserById(id);
    return user;
  }

  async updateUserById(id: ObjectId, dados: IUser) {
    const user = await this.userRepository.updateUserById(id, dados);
    return user;
  }

  async getUsers() {
    const users = await this.userRepository.getUsers();
    return users;
  }

  //   async getUsers() {
  //   const users = await this.userRepository.getUsers()
  //   console.log("Service", users)
  //   return UserDto.fromEntity(users)
  // }
}
