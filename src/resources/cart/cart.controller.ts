import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/createCart.dto';

@Controller('/api/cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  createCart(@Body() createCartdto: CreateCartDto) {
    return this.cartService.createCart(createCartdto);
  }
}
