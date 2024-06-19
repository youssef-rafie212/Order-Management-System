import { OrderStatus } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateOrderDto {
  @IsNotEmpty()
  @IsString()
  status: OrderStatus;
}
