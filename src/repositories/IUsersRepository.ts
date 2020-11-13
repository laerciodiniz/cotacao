import User from '../models/User';

import ICreateUserDTO from '../dtos/ICreateUserDTO';

export default interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
  findByCnpj(cnpj: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
}
