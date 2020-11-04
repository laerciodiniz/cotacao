import { Router } from 'express';
import { getRepository } from 'typeorm';

import Provider from '../models/Provider';

import CreateProviderService from '../services/CreateProviderService';

const ProvidersRouter = Router();

ProvidersRouter.get('/', async (request, response) => {
  const providersRepository = getRepository(Provider);
  const providers = await providersRepository.find();

  return response.json(providers);
})

ProvidersRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const createProvider = new CreateProviderService();

    const provider = await createProvider.execute({
      email,
      password,
    });

    delete provider.password;

    return response.json(provider);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default ProvidersRouter;
