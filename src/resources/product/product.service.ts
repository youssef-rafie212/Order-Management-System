import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateProductDto } from './dto/createProduct.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  createProduct(createProductDto: CreateProductDto) {
    return this.prisma.product.create({
      data: createProductDto,
    });
  }
}
