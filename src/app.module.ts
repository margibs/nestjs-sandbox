import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { DatabaseModule } from './database/database.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [UserModule, PostModule, DatabaseModule, EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
