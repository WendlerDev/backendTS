import { UserDocument } from "../../models/UserModel"
import {UpdateUserDTO, CreateUserDTO } from "../dtos/UserDto" 


interface UserRepositoryInterface {
    
    findUserById(id: number): UserDocument[];
    findUsersByName(name:string): UserDocument | undefined;
    saveUser(user:CreateUserDTO): void;
    deleteUserById(id: number): void;
    updateUserById(id: number): void;
}

export default UserRepositoryInterface;