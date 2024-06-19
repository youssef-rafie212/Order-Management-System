import { IsNotEmpty, IsString } from 'class-validator';
import { OrderStatus } from 'src/utils/types/order.type';

export class UpdateOrderDto {
  @IsNotEmpty()
  @IsString()
  status: OrderStatus;
}
