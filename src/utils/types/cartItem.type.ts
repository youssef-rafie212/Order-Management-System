import { Product } from '@prisma/client';
import { Cart } from './cart.type';

export type CartItem = {
  cartId: number;
  productId: number;
  cart: Cart;
  product: Product;
  quantity?: number;
};
