import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderItemDto } from './dto/createOrderItem.dto';

@Injectable()
export class OrderItemService {
  constructor(private prisma: PrismaService) {}

  createOrderItem(createOrderItemDto: CreateOrderItemDto) {
    let data = createOrderItemDto;
    return this.prisma.orderItem.create({
      data,
    });
  }
}
