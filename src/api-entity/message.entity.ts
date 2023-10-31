import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import User from "./user.entity";

@Entity({ name: "chat_messages" })
export default class Message {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("text")
  body: string;

  @Column("text")
  type: string;

  @Column("timestamp")
  timestamp: Date;

  @Column({ name: "sender_id", type: "integer" })
  senderId: number;

  @Column({ name: "room_id", type: "text" })
  roomId: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

}
