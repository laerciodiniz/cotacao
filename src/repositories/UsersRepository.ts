import { getRepository, Repository } from 'typeorm';

import IUsersRepository from './IUsersRepository';
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../models/User';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create({
    name,
    email,
    cnpj,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({
      name,
      email,
      cnpj,
      password,
    });

    await this.ormRepository.save(user);

    return user;
  }

  public async findById(id: string): Promise<User | undefined> {
    const findUser = await this.ormRepository.findOne(id);

    return findUser;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = await this.ormRepository.findOne({
      where: {
        email,
      },
    });

    return findUser;
  }

  public async findByCnpj(cnpj: string): Promise<User | undefined> {
    const findUser = await this.ormRepository.findOne({
      where: {
        cnpj,
      },
    });

    return findUser;
  }
}

export default UsersRepository;
