import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

import Order from './Order';
import OrdersProducts from './OrdersProducts';

@Entity('orders_products_provider')
class OrdersProductsProvider {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Order, order => order.order_products)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @ManyToOne(() => OrdersProducts)
  @JoinColumn({ name: 'product_id' })
  product_id: OrdersProducts;

  @Column()
  order_id: string;

  @Column()
  id_product: number;

  @Column()
  reference: string;

  @Column()
  product: string;

  @Column('int')
  quantity: number;

  @Column('decimal')
  price: number;

  @Column('int')
  deadline: number;

  @Column()
  payment_terms: string;

  @Column()
  charge_delivery: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default OrdersProductsProvider;
