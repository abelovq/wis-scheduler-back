import { Injectable, Req, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class GoogleService {
  constructor(private jwtService: JwtService) {}
  googleLogin(@Req() req: Request, @Res() res: Response) {
    if (!req.user) {
      return 'No user from google';
    }
    const { id, email, firstName } = req.user as User;

    res.redirect('http://localhost:3001');

    return {
      access_token: this.jwtService.sign({ id, email, firstName }),
      message: 'User information from google',
      user: req.user,
    };
  }
}
