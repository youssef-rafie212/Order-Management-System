import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/createOrder.dto';
import { UpdateOrderDto } from './dto/updateOrder.dto';
import { ApplyCouponDto } from './dto/applyCoupon.dto';

@Controller('/api/orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async createOrder(@Body() createOrderDto: CreateOrderDto) {
    return await this.orderService.createOrder(createOrderDto);
  }

  @Post('apply-coupon')
  async applyCoupon(@Body() applyCouponDto: ApplyCouponDto) {
    return await this.orderService.applyCoupon(applyCouponDto.orderId);
  }

  @Get(':orderId')
  async getOrder(@Param('orderId') orderId: string) {
    return await this.orderService.getOrder(parseInt(orderId, 10));
  }

  @Put(':orderId/status')
  async updateOrder(
    @Param('orderId') orderId: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    return await this.orderService.updateOrder(
      parseInt(orderId, 10),
      updateOrderDto.newStatus,
    );
  }
}
