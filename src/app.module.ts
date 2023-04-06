import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { GoogleService } from './auth/google/google.service';
import { GoogleStrategy } from './auth/google/google.strategy';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/entities/user.entity';
import { UsersService } from './users/users.service';
import { JwtService } from '@nestjs/jwt';
import { VacationModule } from './vacation/vacation.module';
import { VacationMoneyModule } from './vacation-money/vacation-money.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { dataSourceOptions } from '../db/data-source';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
    AuthModule,
    VacationModule,
    VacationMoneyModule,
  ],
  controllers: [AuthController],
  providers: [
    GoogleStrategy,
    GoogleService,
    AppService,
    UsersService,
    JwtService,
    AuthService,
  ],
})
export class AppModule {}
