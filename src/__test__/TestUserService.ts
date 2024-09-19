import { describe, it } from "node:test";
import User, { IUser } from "../models/UserModel";
import { UserRepository } from "../infra/repositories/UserRepository";
import { UserService } from "../dominio/services/UserService";
import exp from "node:constants";

jest.mock("");

describe("UserService", () => {
  let userRepository: jest.Mocked<UserRepository>;
  let userService: UserService;

  beforeEach(() => {
    userRepository = new UserRepository() as jest.Mocked<UserRepository>;
    userService = new UserService(userRepository);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  describe("getUserById", () => {
    it("User return should be the same of ID:", () => {
      const mockUser = { ID: 1, name: "False User", active: true };

      userRepository.findUserById.mockReturnValue(mockUser);

      const user = userService.getId(1);

      userRepository.findUserById.mockReturnValue(mockUser);

      expect(userRepository.findUserById).toHaveBeenCalledWith(1);
      expect(user).toEqual(mockUser);
    });
    it("Should return an error when user not found", () => {
      userRepository.findUserById.mockReturnValue(undefined);

      const user = userService.getId(999);
      expect(() => userService.getUserById(999)).toThrow("User not found");
      expect(userRepository.findUserById).toHaveBeenCalledWith(999);
    });
  });
});
