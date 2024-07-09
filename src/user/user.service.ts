import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  private users = [
    {
      id: 1,
      name: 'John',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'Jane',
      role: 'ADMIN',
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) throw new NotFoundException('User not found');

    return user;
  }
  create(createUserDto: CreateUserDto) {
    const id = [...this.users].sort((a, b) => b.id - a.id)[0].id + 1;
    const newUser = { id, ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
      }
      return user;
    });

    return this.findOne(id);
  }

  remove(id: number) {
    const user = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return user;
  }
}
