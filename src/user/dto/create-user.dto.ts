import { IsEmail, IsString, IsEnum, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'John', description: 'User name' })
  name: string;

  @IsEmail()
  @ApiProperty({ example: 'CfQ5A@example.com', description: 'User email' })
  email: string;

  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], { message: 'Valid role required.' })
  @ApiProperty({ example: 'ADMIN', description: 'User role' })
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}
