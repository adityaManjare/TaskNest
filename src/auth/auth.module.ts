import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import {  Authservice } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth.contants';
import { LocalStrategy } from './local.strategy';
import { jwtstrategy } from './jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from '../entities/user.entity';


@Module({
  controllers: [AuthController],
  imports:[PassportModule,TypeOrmModule.forFeature([user]),JwtModule.register({
    secret:jwtConstants.secret,
    signOptions:{expiresIn:'3000s'}
})],
  providers: [Authservice,LocalStrategy,jwtstrategy],
})
export class AuthModule {}
