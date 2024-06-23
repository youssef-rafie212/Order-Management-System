import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/createOrder.dto';
import { PrismaService } from 'prisma/prisma.service';
import { OrderItemService } from '../order-item/order-item.service';

@Injectable()
export class OrderService {
  constructor(
    private prisma: PrismaService,
    private orderItemService: OrderItemService,
  ) {}

  async createOrder(createOrderDro: CreateOrderDto) {
    const createdOrder = await this.prisma.order.create({
      data: createOrderDro,
    });

    // Get user cart
    const cart = await this.prisma.cart.findUnique({
      where: {
        userId: createOrderDro.userId,
      },
      include: {
        cartItems: true,
      },
    });

    // Create an order item for each item in the cart
    const createOrderItemPromises = cart.cartItems.map((cartItem) => {
      return this.orderItemService.createOrderItem({
        orderId: createdOrder.id,
        productId: cartItem.productId,
        quantity: cartItem.quantity,
        unitPrice: cartItem.unitPrice,
      });
    });

    await Promise.all(createOrderItemPromises);

    // Calculate the total price after all items have been created
    const orderItems = await this.prisma.orderItem.findMany({
      where: {
        orderId: createdOrder.id,
      },
    });

    const totalPrice = orderItems.reduce((sum, item) => {
      return sum + item.unitPrice * item.quantity;
    }, 0);

    await this.prisma.order.update({
      where: { id: createdOrder.id },
      data: { totalPrice },
    });

    return await this.getOrder(createdOrder.id);
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
