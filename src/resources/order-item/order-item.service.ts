import { Injectable } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/createOrderItem.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class OrderItemService {
  constructor(private prisma: PrismaService) {}

  createOrderItem(createOrderItemDto: CreateOrderItemDto) {
    return this.prisma.orderItem.create({
      data: createOrderItemDto,
    });
  }
}
