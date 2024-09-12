import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 50,
    default: '',
  })
  name: string = '';

  @Column({
    default: 0,
  })
  age: number = 0;

  @Column({
    type: 'varchar',
    length: 6,
    default: 'Male',
  })
  gender: 'Male' | 'Female' = 'Male';
}
