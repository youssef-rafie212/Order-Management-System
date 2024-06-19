import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCartDto } from './dto/createCart.dto';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  createCart(createCartDto: CreateCartDto) {
    return this.prisma.cart.create({
      data: createCartDto,
    });
  }
}