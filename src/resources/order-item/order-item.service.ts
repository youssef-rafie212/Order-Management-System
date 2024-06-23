import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/createOrderItem.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class OrderItemService {
  constructor(private prisma: PrismaService) {}

  async createOrderItem(createOrderItemDto: CreateOrderItemDto) {
    return await this.prisma.orderItem.create({
      data: createOrderItemDto,
    });
  }
}
