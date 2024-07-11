import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    email: string,
    password: string,
  ): Promise<{ access_token: string }> {
    // Get user
    // TODO: Check if user exists
    const user = await this.userService.findOneByUsername(email);

    // Check Password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new UnauthorizedException();
    }

    const payload = { email, sub: user.id };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
