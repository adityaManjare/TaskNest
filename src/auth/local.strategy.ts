import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { Authservice } from './auth.service';
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) { 

  constructor(private authoService: Authservice) {
    super();
  }
  async validate(username: string, password: string): Promise<any> {
    const user = await this.authoService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}