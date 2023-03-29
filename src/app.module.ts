import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleController } from './google/google.controller';
import { GoogleService } from './google/google.service';
import { GoogleStrategy } from './google/google.strategy';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/entities/user.entity';
import { UsersService } from './users/users.service';
import { JwtService } from '@nestjs/jwt';
import { VacationModule } from './vacation/vacation.module';
import { VacationMoneyModule } from './vacation-money/vacation-money.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user1',
      password: 'password',
      database: 'wisscheduler',
      entities: [User],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    VacationModule,
    VacationMoneyModule,
  ],
  controllers: [GoogleController, AppController],
  providers: [
    GoogleStrategy,
    GoogleService,
    AppService,
    UsersService,
    JwtService,
  ],
})
export class AppModule {}
