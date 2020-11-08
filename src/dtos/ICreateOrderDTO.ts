import User from '../models/User';

interface IProduct {
  product_id: string;
  id_product: number;
  reference: string;
  product: string;
  quantity: number;
}

export default interface ICreateOrderDTO {
  user: User;
  id_quotation: number;
  date_limit: Date;
  products: IProduct[];
}
