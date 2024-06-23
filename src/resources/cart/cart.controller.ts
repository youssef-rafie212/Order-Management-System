import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/createCart.dto';

@Controller('/api/carts')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  async createCart(@Body() createCartdto: CreateCartDto) {
    return await this.cartService.createCart(createCartdto);
  }

  @Get(':userId')
  async getCart(@Param('userId') userId: string) {
    return await this.cartService.getCart(parseInt(userId, 10));
  }
}
