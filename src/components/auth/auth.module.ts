import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { SendEmailService } from "src/utils/send-email.service";
import { UserActivityModule } from "../user_activity/user_activity.module";
import { UsersModule } from "../users/users.module";
import { AuthController } from "./auth.controller";
import { AuthRepository } from "./auth.repository";
import { jwtConstants } from "./constants";
import { JwtStrategy } from "./strategy/jwt.strategy";
import { LocalStrategy } from "./strategy/local.strategy";

@Module({
  imports: [
    UsersModule,
    UserActivityModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [
    AuthRepository, 
    LocalStrategy, 
    JwtStrategy, 
    SendEmailService
  ],
  controllers: [AuthController],
  exports: [AuthRepository],
})
export class AuthModule {}
