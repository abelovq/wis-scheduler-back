import { Module } from '@nestjs/common';
import { VacationMoneyService } from './vacation-money.service';
import { VacationMoneyController } from './vacation-money.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VacationMoney } from './entities/vacation-money.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VacationMoney])],
  controllers: [VacationMoneyController],
  providers: [VacationMoneyService],
})
export class VacationMoneyModule {}
