import { IUser, UserDocument } from "../models/UserModel";
import { UserRepository } from "../infra/repositories/UserRepository";

export class UserService {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }
  async addUser({
    nome,
    ativo,
    tempoDeAulaMinutos,
    contato,
    dadoExternoNaoTratado,
  }:IUser) {
    if (!nome) throw new Error("Name is mandatory")
    const user = await this.userRepository.saveUser({
      nome,
      ativo,
      tempoDeAulaMinutos,
      contato,
      dadoExternoNaoTratado,
    });
    return user;
  }
}
