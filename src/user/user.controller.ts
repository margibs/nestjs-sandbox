import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  getUsers(): [] {
    return [];
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number): { id: number } {
    return { id };
  }
}
