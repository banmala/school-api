import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { formatPermission } from 'src/utils/format-permissions';
import { AuthRepository } from '../auth.repository';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authRepository: AuthRepository) {
    super({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
      });
  }
  async validate(req: Request, username: string, password: string): Promise<any> {
    const user = await this.authRepository.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    console.log("user: ", user)
    user.roles = formatPermission(user.roles);
    req.body = user;
    return user;
  }
}
