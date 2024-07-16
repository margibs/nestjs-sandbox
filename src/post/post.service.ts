import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment, Post, User } from 'src/entities';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto, currUser: User) {
    const post = this.postRepository.create({
      ...createPostDto,
      user: currUser,
    });

    return await this.postRepository.save(post);
  }

  async findAll() {
    return await this.postRepository.find();
  }

  findOne(id: number) {
    return this.postRepository.findOne({
      relations: ['comments', 'user'],
      where: { id },
    });
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
