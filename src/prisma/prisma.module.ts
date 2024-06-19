import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// Prisma module to allow exporting prismaServices to be used by other modules that imports prisma module
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
