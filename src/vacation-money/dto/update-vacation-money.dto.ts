import { PartialType } from '@nestjs/mapped-types';
import { CreateVacationMoneyDto } from './create-vacation-money.dto';

export class UpdateVacationMoneyDto extends PartialType(CreateVacationMoneyDto) {}
