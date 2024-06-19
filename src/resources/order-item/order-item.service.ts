import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/createOrderItem.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class OrderItemService {
  constructor(private prisma: PrismaService) {}

  async createOrderItem(createOrderItemDto: CreateOrderItemDto) {
    // Update the total price of the related order
    const order = await this.prisma.order.findUnique({
      where: { id: createOrderItemDto.orderId },
    });

    if (!order) {
      throw new BadRequestException();
    }

    const currentTotalPrice = order.totalPrice;

    const total = createOrderItemDto.unitPrice * createOrderItemDto.quantity;

    await this.prisma.order.update({
      where: { id: createOrderItemDto.orderId },
      data: { totalPrice: currentTotalPrice + total },
    });

    return this.prisma.orderItem.create({
      data: createOrderItemDto,
    });
  }
}
