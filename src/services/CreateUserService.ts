import { inject, injectable } from 'tsyringe';

import { hash } from 'bcryptjs';
import AppError from '../errors/AppError';

import User from '../models/User';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
  cnpj: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    name,
    email,
    cnpj,
    password,
  }: IRequest): Promise<User> {
    const emailExists = await this.usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already used.');
    }

    const cnpjExists = await this.usersRepository.findByCnpj(cnpj);

    if (cnpjExists) {
      throw new AppError('Cnpj already used.');
    }

    const hashedPassword = await hash(password, 8);

    const user = this.usersRepository.create({
      name,
      email,
      cnpj,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUserService;
