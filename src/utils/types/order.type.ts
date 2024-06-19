import { OrderItem } from './orderItem.type';
import { User } from './user.type';

export enum OrderStatus {
  Pending = 'Pending',
  Shipping = 'Shipping',
  Shipped = 'Shipped',
  Cancelled = 'Cancelled',
}

export type Order = {
  id: number;
  orderDate: Date;
  status: OrderStatus;
  user: User;
  userId: number;
  orderItems: OrderItem[];
};
