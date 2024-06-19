import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto/createOrder.dto';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  createOrder(createOrderDro: CreateOrderDto) {
    return this.prisma.order.create({
      data: createOrderDro,
    });
  }
}
