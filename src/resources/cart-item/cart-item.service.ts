import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateCartItemDto } from './dto/createCartItem.dto';
import { UpdateCartItemDto } from './dto/updateCartItem.dto';
import { RemoveCartItemDto } from './dto/removeCartItem.dto';

@Injectable()
export class CartItemService {
  constructor(private prisma: PrismaService) {}

  async createCartItem(createCartItemDto: CreateCartItemDto) {
    const cart = await this.prisma.cart.findUnique({
      where: { id: createCartItemDto.cartId },
      include: { cartItems: true },
    });

    if (!cart) {
      throw new BadRequestException();
    }

    // Check if the cart item (product) already exists
    const product = cart.cartItems.find(
      (item) => item.productId === createCartItemDto.productId,
    );

    if (product) {
      return await this.prisma.cartItem.update({
        where: { id: product.id },
        data: { quantity: product.quantity + 1 },
      });
    }

    return this.prisma.cartItem.create({
      data: createCartItemDto,
    });
  }

  async updateCartItem(updateCartItemDto: UpdateCartItemDto) {
    return await this.prisma.cartItem.update({
      where: { id: updateCartItemDto.cartItemId },
      data: { quantity: updateCartItemDto.newQuantity },
    });
  }

  async removeCartItem(removeCartItemDto: RemoveCartItemDto) {
    return await this.prisma.cartItem.delete({
      where: { id: removeCartItemDto.cartItemId },
    });
  }
}
