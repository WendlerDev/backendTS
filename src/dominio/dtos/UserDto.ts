import { UserController } from "../../controllers/UserController";

export type CreateUserDTO = Omit<UserController, "id">

export type UpdateUserDTO = Partial<CreateUserDTO>


