import Order from '../models/Order';

import ICreateOrderDTO from '../dtos/ICreateOrderDTO';

export default interface IOrdersRepository {
  create(data: ICreateOrderDTO): Promise<Order>;
  findById(id: string): Promise<Order | undefined>;
  findByOrderUser(
    user: string,
    id_quotation: number,
  ): Promise<Order | undefined>;
}
