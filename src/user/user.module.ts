import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { userService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tasks } from 'src/entities/tasks.entity';

@Module({
  controllers: [UserController],
  imports:[ TypeOrmModule.forFeature([tasks])],
  providers: [userService]
})
export class UserModule {}
