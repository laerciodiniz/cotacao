import { container } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';
import UsersRepository from '../repositories/UsersRepository';

// import IProductsRepository from '@modules/products/repositories/IProductsRepository';
// import ProductsRepository from '@modules/products/infra/typeorm/repositories/ProductsRepository';

import IOrdersRepository from '../repositories/IOrdersRepository';
import OrdersRepository from '../repositories/OrdersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

// container.registerSingleton<IProductsRepository>(
//   'ProductsRepository',
//   ProductsRepository,
// );

container.registerSingleton<IOrdersRepository>(
  'OrdersRepository',
  OrdersRepository,
);
