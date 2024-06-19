import { CartItem } from './cartItem.type';
import { User } from './user.type';

export type Cart = {
  id: number;
  user: User;
  userId: number;
  cartItems: CartItem[];
};
