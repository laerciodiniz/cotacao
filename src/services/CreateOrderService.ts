import { inject, injectable } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';
import Order from '../models/Order';
import IOrdersRepository from '../repositories/IOrdersRepository';

interface IProduct {
  id_product: number;
  reference: string;
  product: string;
  quantity: number;
}

interface IRequest {
  user_id: string;
  id_quotation: number;
  date_limit: Date;
  products: IProduct[];
}

@injectable()
class CreateOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    user_id,
    id_quotation,
    date_limit,
    products,
  }: IRequest): Promise<Order> {
    const userExists = await this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new Error('Could not find any user with the given id');
    }

    const serializedProducts = products.map(product => ({
      id_product: product.id_product,
      reference: product.reference,
      product: product.product,
      quantity: product.quantity,
    }));

    const order = await this.ordersRepository.create({
      user: userExists,
      id_quotation,
      date_limit,
      products: serializedProducts,
    });

    return order;
  }
}

export default CreateOrderService;
