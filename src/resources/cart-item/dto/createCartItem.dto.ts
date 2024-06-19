import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCartItemDto {
  @IsNotEmpty()
  @IsNumber()
  cartId: number;

  @IsNotEmpty()
  @IsNumber()
  productId: number;

  @IsNumber()
  quantity?: number;

  @IsNotEmpty()
  @IsNumber()
  unitPrice: number; // Currrent price
}
