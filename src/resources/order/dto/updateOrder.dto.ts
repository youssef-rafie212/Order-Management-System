import { OrderStatus } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateOrderDto {
  @IsString()
  status: OrderStatus;
}
