import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Vacation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;
}
