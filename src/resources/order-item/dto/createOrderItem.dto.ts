import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrderItemDto {
  @IsNotEmpty()
  @IsNumber()
  orderId: number;

  @IsNotEmpty()
  @IsNumber()
  productId: number;

  @IsNumber()
  quantity?: number;

  @IsNotEmpty()
  @IsNumber()
  unitPrice: number;
}
