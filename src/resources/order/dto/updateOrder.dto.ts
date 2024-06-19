import { IsNumber, IsString } from 'class-validator';

export class UpdateOrderDto {
  @IsNumber()
  orderId: number;

  @IsString()
  newStatus: string;
}
