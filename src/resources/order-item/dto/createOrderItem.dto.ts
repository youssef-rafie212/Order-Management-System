import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrderItemDto {
  @IsNumber()
  orderId: number;

  @IsNumber()
  productId: number;

  quantity?: number;

  @IsNumber()
  unitPrice: number; // Price at the time of the order
}
