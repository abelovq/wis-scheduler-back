import { Module } from '@nestjs/common';
import { VacationMoneyService } from './vacation-money.service';
import { VacationMoneyController } from './vacation-money.controller';

@Module({
  controllers: [VacationMoneyController],
  providers: [VacationMoneyService]
})
export class VacationMoneyModule {}
