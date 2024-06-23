import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { OrderItemService } from '../order-item/order-item.service';
import { OrderItemModule } from '../order-item/order-item.module';

@Module({
  imports: [OrderItemModule],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
