import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// Creating a simple service for the prisma client to use dependency injection and make the code more clean as well
@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super();
    this.$connect();
  }
}
