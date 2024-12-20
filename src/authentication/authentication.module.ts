import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { LocalStrategy } from "./local/local.strategy";
import { UsersModule } from "../users/users.module";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./jwt/jwt.strategy";
import { Jwt2faStrategy } from "./jwt-2fa/jwt-2fa.strategy";

@Module({
  imports: [UsersModule,
    JwtModule.register({       // Dynamic Configuration of JWT Token
      secret: 'secret',
      signOptions: { expiresIn: '1d' },  // JWT Token will expire in 1 Day
    }),
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, LocalStrategy, JwtStrategy, Jwt2faStrategy]
})
export class AuthenticationModule {}
