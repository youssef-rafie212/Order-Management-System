import { Controller, Post } from '@nestjs/common';
import { CartItemService } from './cart-item.service';
import { CreateCartItemDto } from './dto/createCartItem.dto';

@Controller('/api/cart-item')
export class CartItemController {
  constructor(private readonly cartItemService: CartItemService) {}

  @Post()
  createCartItem(createCartItemDto: CreateCartItemDto) {
    return this.cartItemService.createCartItem(createCartItemDto);
  }
}
