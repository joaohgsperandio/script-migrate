import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";

@Entity({ name: "chat_rooms" })
export default class Room {
  @PrimaryColumn("uuid")
  id: string;

  @Column("text")
  name: string;

  @Column({ name: "allowed_message_types", type: "text", array: true })
  allowedMessageTypes: string[];

  @Column({ name: "channel_id", type: "text" })
  channelId: string;

  @Column({ name: "created_at", type: "timestamp" })
  createdAt: Date;

  @Column({ name: "updated_at", type: "timestamp" })
  updatedAt: Date;

}
