import { getRepository, Repository } from 'typeorm';

import IOrdersRepository from './IOrdersRepository';
import ICreateOrderDTO from '../dtos/ICreateOrderDTO';
import Order from '../models/Order';

class OrdersRepository implements IOrdersRepository {
  private ormRepository: Repository<Order>;

  constructor() {
    this.ormRepository = getRepository(Order);
  }

  public async create({
    user,
    id_quotation,
    date_limit,
    products,
  }: ICreateOrderDTO): Promise<Order> {
    const order = this.ormRepository.create({
      user,
      id_quotation,
      date_limit,
      order_products: products,
    });

    await this.ormRepository.save(order);

    return order;
  }

  public async findById(id: string): Promise<Order | undefined> {
    const order = this.ormRepository.findOne(id, {
      relations: ['order_products', 'user'],
    });

    return order;
  }
}

export default OrdersRepository;
