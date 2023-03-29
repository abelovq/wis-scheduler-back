import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async login(email: string) {
    const user = await this.usersService.findOneByEmail(email);
    return user;
  }
}
