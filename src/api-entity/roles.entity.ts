import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import User from "./user.entity";

@Entity("roles")
export default class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "display_name", type: "text" })
  displayName: string;

  @Column({ type: "text" })
  code: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}
