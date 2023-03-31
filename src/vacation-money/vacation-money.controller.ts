import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VacationMoneyService } from './vacation-money.service';
import { CreateVacationMoneyDto } from './dto/create-vacation-money.dto';
import { UpdateVacationMoneyDto } from './dto/update-vacation-money.dto';

@Controller('vacation-money')
export class VacationMoneyController {
  constructor(private readonly vacationMoneyService: VacationMoneyService) {}

  @Post()
  create(@Body() createVacationMoneyDto: CreateVacationMoneyDto) {
    return this.vacationMoneyService.create(createVacationMoneyDto);
  }

  @Get()
  findAll() {
    return this.vacationMoneyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vacationMoneyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVacationMoneyDto: UpdateVacationMoneyDto) {
    return this.vacationMoneyService.update(+id, updateVacationMoneyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vacationMoneyService.remove(+id);
  }
}
