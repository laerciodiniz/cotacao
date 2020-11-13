import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateOrderService from '../services/CreateOrderService';

export default class OrdersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { user_id, id_quotation, date_limit, products } = request.body;

    const createOrder = container.resolve(CreateOrderService);

    const user = await createOrder.execute({
      user_id,
      id_quotation,
      date_limit,
      products,
    });

    return response.json(user);
  }
}
