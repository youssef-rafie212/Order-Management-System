import { Product } from '@prisma/client';
import { Order } from './order.type';

export type OrderItem = {
  orderId: number;
  productId: number;
  order: Order;
  product: Product;
  quantity?: number;
  unitPrice: number; // Price at the order time
};
