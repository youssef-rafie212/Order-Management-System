import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCartItemDto } from './dto/createCartItem.dto';

@Injectable()
export class CartItemService {
  constructor(private prisma: PrismaService) {}

  createCartItem(createCartItemDto: CreateCartItemDto) {
    return this.prisma.cartItem.create({
      data: createCartItemDto,
    });
  }
}
