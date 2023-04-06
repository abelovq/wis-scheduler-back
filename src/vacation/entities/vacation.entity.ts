import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vacation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;
}
