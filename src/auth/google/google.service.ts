import { Injectable, Req, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { AuthService } from '../auth.service';

@Injectable()
export class GoogleService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  async googleLogin(@Req() req: Request, @Res() res: Response) {
    if (!req.user) {
      return 'No user from google';
    }
    const { email, firstName } = req.user as User;

    const { refreshToken, accessToken } = this.authService.getTokens(
      email,
      firstName,
    );

    await this.usersService.updateRefreshToken({
      email,
      refreshToken,
    });

    res.cookie('access_token', accessToken, { httpOnly: true });
    res.cookie('refresh_token', refreshToken, { httpOnly: true });

    res.redirect('http://localhost:3000');

    return {
      message: 'User information from google',
      user: req.user,
    };
  }
}
