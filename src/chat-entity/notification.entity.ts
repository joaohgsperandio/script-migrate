import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import User from "./user.entity";

@Entity({ name: "notifications" })
export default class Notification {
  @PrimaryColumn("uuid")
  id: string;

  @Column("text")
  kind: string;

  @Column({ type: "json", default: "{}" })
  metadata: Record<string, unknown>;

  @Column({ nullable: true, type: "text" })
  message?: string;

  @Column({ nullable: true, name: "seen_at", type: "timestamp" })
  seenAt?: Date;

  @Column({ name: "occurred_at", type: "timestamp" })
  occurredAt: Date;

  @Column({ name: "user_id", type: "char" })
  userId: string;

  @Column({ name: "created_at", type: "timestamp" })
  createdAt: Date;

  @Column({ name: "updated_at", type: "timestamp" })
  updatedAt: Date;

}
