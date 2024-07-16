import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment, Post } from 'src/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Comment, Post])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
