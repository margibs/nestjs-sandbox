import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'typeORMConfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    PostModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
