import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany, ManyToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'users' })
@Unique(['email'])
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  picture: string;

  @Column({ type: 'simple-array', default: [] })
  roles: string[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

}