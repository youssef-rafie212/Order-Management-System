import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/createOrder.dto';

@Controller('/api/order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.createOrder(createOrderDto);
  }

  @Get(':orderId')
  async getOrder(@Param('orderId') orderId: string) {
    return await this.orderService.getOrder(parseInt(orderId, 10));
  }

  @Put(':orderId/status')
  async updateOrder(
    @Param('orderId') orderId: string,
    @Body() newStatus: string,
  ) {
    const dto = {
      orderId: parseInt(orderId, 10),
      newStatus,
    };

    return await this.orderService.updateOrder(dto);
  }
}
