import { Module } from '@nestjs/common';
import { UserModule } from './resources/user/user.module';
import { ProductModule } from './resources/product/product.module';
import { OrderModule } from './resources/order/order.module';
import { CartModule } from './resources/cart/cart.module';
import { OrderItemModule } from './resources/order-item/order-item.module';
import { CartItemModule } from './resources/cart-item/cart-item.module';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [
    UserModule,
    ProductModule,
    OrderModule,
    CartModule,
    OrderItemModule,
    CartItemModule,
    PrismaModule,
  ],
})
export class AppModule {}
