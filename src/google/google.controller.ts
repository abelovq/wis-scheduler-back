import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { GoogleService } from './google.service';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';

@Controller('api/auth/google')
export class GoogleController {
  constructor(private readonly googleService: GoogleService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
    async googleAuth(@Req() req: Request) {
  }

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req: Request, @Res() res: Response) {
    return this.googleService.googleLogin(req, res)
  }

  @Get('login')
  @UseGuards(AuthGuard('google'))
  googleLogin(@Req() req: Request) {
    // return this.userService.getUser(req)
  }
}