import { OrderStatus } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  userId: number;

  @IsEnum(OrderStatus)
  status: OrderStatus;
}
