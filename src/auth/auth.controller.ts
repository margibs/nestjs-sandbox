import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  signIn(@Body() signInDto: { email: string; password: string }) {
    const { email, password } = signInDto;
    return this.authService.signIn(email, password);
  }
}
