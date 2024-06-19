import { Cart } from './cart.type';
import { Order } from './order.type';

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  address: string;
  orders: Order[];
  cart?: Cart;
};
