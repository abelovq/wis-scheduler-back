import { ForbiddenException, Injectable, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { RefreshTokenDto } from './dto/refresh-token.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async getProfile(email: string) {
    const { refreshToken, ...data } = await this.usersService.findByEmail(
      email,
    );
    return data;
  }

  async signout(email: string) {
    this.usersService.signout(email);
  }

  getTokens(email: string, firstName: string) {
    const accessToken = this.jwtService.sign(
      { sub: email, firstName },
      { secret: 'secret', expiresIn: '15s' },
    );
    const refreshToken = this.jwtService.sign(
      { sub: email, firstName },
      { secret: 'secret', expiresIn: '30s' },
    );
    return { accessToken, refreshToken };
  }

  async refreshToken(data: RefreshTokenDto) {
    const { email, refreshToken } = data;
    const user = await this.usersService.findByEmail(email);
    if (!user || !user.refreshToken) {
      throw new ForbiddenException('Access denied');
    }
    const tokensMatch = refreshToken === user.refreshToken;
    if (!tokensMatch) {
      throw new ForbiddenException('Access denied');
    }
    const tokens = this.getTokens(email, user.firstName);
    await this.updateRefreshToken(email, tokens.refreshToken);
    return tokens;
  }

  async updateRefreshToken(userEmail: string, token: string) {
    await this.usersService.updateRefreshToken({
      email: userEmail,
      refreshToken: token,
    });
  }
}
