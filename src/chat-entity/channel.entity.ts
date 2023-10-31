import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Room from "./room.entity";

@Entity({ name: "chat_channels" })
export default class Channel {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("text")
  name: string;

  @Column({ name: "created_at", type: "timestamp" })
  createdAt: Date;

  @Column({ name: "updated_at", type: "timestamp" })
  updatedAt: Date;
}
