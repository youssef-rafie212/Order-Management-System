import { Injectable } from '@nestjs/common';

import { CreateOrderDto } from './dto/createOrder.dto';
import { UpdateOrderDto } from './dto/updateOrder.dto';
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

  async updateOrder(updateOrderDto: UpdateOrderDto) {
    return await this.prisma.order.update({
      where: { id: updateOrderDto.orderId },
      data: {
        status: {
          set: updateOrderDto.newStatus,
        },
      },
    });
  }
}
