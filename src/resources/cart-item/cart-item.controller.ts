import { Body, Controller, Delete, Post, Put } from '@nestjs/common';
import { CartItemService } from './cart-item.service';
import { CreateCartItemDto } from './dto/createCartItem.dto';
import { UpdateCartItemDto } from './dto/updateCartItem.dto';
import { RemoveCartItemDto } from './dto/removeCartItem.dto';

@Controller('/api/cart-items')
export class CartItemController {
  constructor(private readonly cartItemService: CartItemService) {}

  @Post()
  async createCartItem(@Body() createCartItemDto: CreateCartItemDto) {
    return await this.cartItemService.createCartItem(createCartItemDto);
  }

  @Put()
  async updateCartItem(@Body() updateCartItemDto: UpdateCartItemDto) {
    return await this.cartItemService.updateCartItem(updateCartItemDto);
  }

  @Delete()
  async removeCartItem(@Body() removeCartItemDto: RemoveCartItemDto) {
    return await this.cartItemService.removeCartItem(removeCartItemDto);
  }
}
