import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class VacationMoney {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;
}
