import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  @MaxLength(32)
  name: string;

  @IsEmail()
  @IsString()
  email: string;

  @MinLength(8)
  @IsString()
  password: string;

  @IsString()
  address: string;
}
