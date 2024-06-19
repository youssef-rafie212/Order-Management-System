import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/createOrder.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  createOrder(createOrderDro: CreateOrderDto) {
    return this.prisma.order.create({
      data: createOrderDro,
    });
  }

  async getOrder(orderId: number) {
    return await this.prisma.order.findUnique({
      where: { id: orderId },
    });
  }

  async updateOrder(orderId: number, newStatus: string) {
    return await this.prisma.order.update({
      where: { id: orderId },
      data: { status: newStatus },
    });
  }

  // For simplicity im assuming that any coupon works and they all will do a 50% discount so im not taking the coupon from the user
  async applyCoupon(orderId: number) {
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
    });

    if (!order) {
      throw new BadRequestException();
    }

    const oldTotalPrice = order.totalPrice;

    return await this.prisma.order.update({
      where: { id: orderId },
      data: { totalPrice: oldTotalPrice / 2 },
    });
  }
}
