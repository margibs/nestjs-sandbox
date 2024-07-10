import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column()
  password: string;
}
