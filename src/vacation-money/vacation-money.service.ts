import { Injectable } from '@nestjs/common';
import { CreateVacationMoneyDto } from './dto/create-vacation-money.dto';
import { UpdateVacationMoneyDto } from './dto/update-vacation-money.dto';

@Injectable()
export class VacationMoneyService {
  create(createVacationMoneyDto: CreateVacationMoneyDto) {
    return 'This action adds a new vacationMoney';
  }

  findAll() {
    return `This action returns all vacationMoney`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vacationMoney`;
  }

  update(id: number, updateVacationMoneyDto: UpdateVacationMoneyDto) {
    return `This action updates a #${id} vacationMoney`;
  }

  remove(id: number) {
    return `This action removes a #${id} vacationMoney`;
  }
}
