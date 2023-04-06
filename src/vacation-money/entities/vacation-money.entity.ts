import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class VacationMoney {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;
}
