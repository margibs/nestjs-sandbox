import { IsEmail, IsString, IsEnum, IsNotEmpty } from 'class-validator';
import { UserRole } from 'src/entities/user.entity';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEnum(['admin', 'editor', 'ghost'], { message: 'Valid role required.' })
  role: UserRole;
}
