import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/createOrder.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async createOrder(createOrderDro: CreateOrderDto) {
    const createdOrder = await this.prisma.order.create({
      data: createOrderDro,
    });

    // Get user cart
    const cart = await this.prisma.cart.findUnique({
      where: {
        id: createOrderDro.userId,
      },
      include: {
        cartItems: true,
      },
    });

    // Create an order item for each item in the cart
    cart.cartItems.forEach(async (cartItem) => {
      await this.prisma.orderItem.create({
        data: {
          orderId: createdOrder.id,
          productId: cartItem.productId,
          quantity: cartItem.quantity,
          unitPrice: cartItem.unitPrice,
        },
      });
    });

    return createdOrder;
  }

  async getOrder(orderId: number) {
    return await this.prisma.order.findUnique({
      where: { id: orderId },
      include: {
        orderItems: true,
      },
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
