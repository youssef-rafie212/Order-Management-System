import { Body, Controller, Post } from '@nestjs/common';
import { CartItemService } from './cart-item.service';
import { CreateCartItemDto } from './dto/createCartItem.dto';

@Controller('/api/cart/add') // Adds a cart item (product) to the given cart
export class CartItemController {
  constructor(private readonly cartItemService: CartItemService) {}

  @Post()
  createCartItem(@Body() createCartItemDto: CreateCartItemDto) {
    return this.cartItemService.createCartItem(createCartItemDto);
  }
}
