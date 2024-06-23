import { Module } from '@nestjs/common';
import { OrderItemService } from './order-item.service';

@Module({
  controllers: [], // This resource has no controllers as the service is only used by the order service
  providers: [OrderItemService],
  exports: [OrderItemService],
})
export class OrderItemModule {}
