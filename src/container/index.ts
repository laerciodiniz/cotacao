import { container } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';
import UsersRepository from '../repositories/UsersRepository';

import IOrdersRepository from '../repositories/IOrdersRepository';
import OrdersRepository from '../repositories/OrdersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IOrdersRepository>(
  'OrdersRepository',
  OrdersRepository,
);
