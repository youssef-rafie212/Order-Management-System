import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateCartDto {
  @IsNumber()
  cartItemId: number; // A reference to the item in the cart to update its quantity
}
