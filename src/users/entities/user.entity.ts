import { Role } from 'src/types/roles.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: null, nullable: true })
  refreshToken: string;

  @Column({
    type: 'enum',
    enum: Role,
    enumName: 'rolesEnum',
    array: true,
    default: [Role.User],
  })
  roles: Role[];
}
