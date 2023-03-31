import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns user by #${id}`;
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findOneBy({
      email,
    });
    return user;
  }

  async updateRefreshToken(data: UpdateUserDto) {
    const { email, refreshToken } = data;
    await this.usersRepository.update({ email }, { refreshToken });
  }

  async signout(email: string) {
    await this.usersRepository.update({ email }, { refreshToken: null });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
