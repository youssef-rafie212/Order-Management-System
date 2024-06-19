import { IsNotEmpty, IsNumber } from 'class-validator';

export class RemoveFromCartDto {
  @IsNumber()
  cartItemId: number; // A reference to the item in the cart to be deleted
}
