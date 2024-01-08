import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Flights {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  date: string;

  @Column({ length: 500 })
  duration: string;

  @Column({ length: 500 })
  pilot: string;

  @Column({ length: 500 })
  airplaneType: string;

}
