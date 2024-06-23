import { Body, Controller, Post } from '@nestjs/common';
import { OrderItemService } from './order-item.service';
import { CreateOrderItemDto } from './dto/createOrderItem.dto';

@Controller('/api/order-items')
export class OrderItemController {
  constructor(private readonly orderItemService: OrderItemService) {}

  @Post()
  async createOrderItem(@Body() createOrderItemDto: CreateOrderItemDto) {
    return await this.orderItemService.createOrderItem(createOrderItemDto);
  }
}
