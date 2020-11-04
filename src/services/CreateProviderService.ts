import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import Provider from '../models/Provider';

interface Request {
  email: string;
  password: string;
}

class CreateProviderService {
  public async execute({ email, password }: Request): Promise<Provider> {
    const providersRepository = getRepository(Provider);

    const checkProviderExists = await providersRepository.findOne({
      where: { email },
    });

    if (checkProviderExists) {
      throw new Error('Email address already used.');
    }

    const hashedPassword = await hash(password, 8);

    const provider = providersRepository.create({
      email,
      password: hashedPassword,
    });

    await providersRepository.save(provider);

    return provider;
  }
}

export default CreateProviderService;
