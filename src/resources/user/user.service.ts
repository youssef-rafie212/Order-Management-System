import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateUserDto } from './dto/createUser.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(createUserDto: CreateUserDto) {
    // Hash the password
    createUserDto.password = await bcrypt.hash(createUserDto.password, 12);

    const createdUser = await this.prisma.user.create({
      data: createUserDto,
    });

    // Create a cart for the user
    await this.prisma.cart.create({
      data: {
        userId: createdUser.id,
      },
    });

    return createdUser;
  }

  async getAllUserOrders(userId: number) {
    return await this.prisma.order.findMany({
      where: { userId },
    });
  }
}
