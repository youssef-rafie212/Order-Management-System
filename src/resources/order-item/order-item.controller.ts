import { Controller, Post } from '@nestjs/common';
import { OrderItemService } from './order-item.service';
import { CreateOrderItemDto } from './dto/createOrderItem.dto';

@Controller('/api/order-item')
export class OrderItemController {
  constructor(private readonly orderItemService: OrderItemService) {}

  @Post()
  createOrderItem(createOrderItemDto: CreateOrderItemDto) {
    return this.orderItemService.createOrderItem(createOrderItemDto);
  }
}
