import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateCartDto {
  @IsNotEmpty()
  @IsNumber()
  cartItemId: number; // A reference to the item in the cart to update its quantity
}
