import { Req, Controller, Res, Get, UseGuards, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { User } from 'src/users/entities/user.entity';
import { GoogleService } from './google/google.service';
import { GoogleAuthGuard } from './guards/google.guard';
import { AccessJwtAuthGuard } from './guards/access-jwt-auth.guard';
import { RefreshJwtAuthGuard } from './guards/refresh-jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly googleService: GoogleService,
  ) {}

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  async googleAuth(@Req() req: Request) {}

  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  googleAuthRedirect(@Req() req: Request, @Res() res: Response) {
    return this.googleService.googleLogin(req, res);
  }

  @UseGuards(AccessJwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req: Request) {
    const { email } = req.user as User;
    return this.authService.getProfile(email);
  }

  @UseGuards(AccessJwtAuthGuard)
  @Get('signout')
  async signout(@Req() req: Request, @Res() res: Response) {
    const { email } = req.user as User;
    await this.authService.signout(email);

    res.clearCookie('access_token', {
      httpOnly: true,
      path: '/',
    });
    res.clearCookie('refresh_token', {
      httpOnly: true,
      path: '/',
    });

    return res.sendStatus(200);
  }

  @UseGuards(RefreshJwtAuthGuard)
  @Get('refresh')
  async refreshToken(@Req() req: Request, @Res() res: Response) {
    const email = req.user['sub'];
    const oldRefreshToken = req.cookies['refresh_token'];
    const { refreshToken, accessToken } = await this.authService.refreshToken({
      email,
      refreshToken: oldRefreshToken,
    });

    res.cookie('access_token', accessToken, { httpOnly: true });
    res.cookie('refresh_token', refreshToken, { httpOnly: true });

    return res.sendStatus(200);
  }
}
