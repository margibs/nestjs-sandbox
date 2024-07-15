import { Controller, Post, Request, UseGuards, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local.auth.guard';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { JwtRefreshAuthGuard } from './guards/jwt-refresh.auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly usersService: UserService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return await this.authService.login(req.user);
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @UseGuards(JwtRefreshAuthGuard)
  @Post('refresh')
  async refreshToken(@Request() req) {
    return await this.authService.refreshToken(req.user);
  }
}
