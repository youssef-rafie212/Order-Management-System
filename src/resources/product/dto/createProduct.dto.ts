import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(3)
  @MaxLength(120)
  name: string;

  @IsString()
  @MinLength(24)
  @MaxLength(320)
  description: string;

  @IsNumber()
  price: number;

  @IsNumber()
  stock: number;
}
