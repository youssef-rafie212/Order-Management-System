import { IsNumber } from 'class-validator';

export class UpdateCartItemDto {
  @IsNumber()
  cartItemId: number; // A reference to the item in the cart to update its quantity

  @IsNumber()
  newQuantity: number;
}
