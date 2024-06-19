import { IsNumber, IsString } from 'class-validator';

export class ApplyCouponDto {
  @IsNumber()
  orderId: number;
}
