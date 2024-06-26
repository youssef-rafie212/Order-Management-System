import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateCartDto } from './dto/createCart.dto';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  async createCart(createCartDto: CreateCartDto) {
    return await this.prisma.cart.create({
      data: createCartDto,
    });
  }

  async getCart(userId: number) {
    return await this.prisma.cart.findUnique({
      where: { userId },
      include: { cartItems: true },
    });
  }
}
