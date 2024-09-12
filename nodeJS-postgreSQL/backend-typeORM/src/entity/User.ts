import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 50 })
  name!: string;

  @Column({ type: 'int', nullable: false })
  age!: number;

  @Column({ type: 'varchar', default: 'Male' })
  gender!: 'Male' | 'Female';
}
