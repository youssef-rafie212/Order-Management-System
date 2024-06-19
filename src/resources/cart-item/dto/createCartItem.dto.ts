import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCartItemDto {
  @IsNumber()
  cartId: number;

  @IsNumber()
  productId: number;

  quantity?: number;

  @IsNumber()
  unitPrice: number; // Currrent price
}
