import { PrimaryColumn, Entity } from "typeorm";

@Entity({ name: "chat_rooms_users" })
export default class RoomToUser {
  @PrimaryColumn("uuid", {name: 'room_id'})
  roomId: string;

  @PrimaryColumn("uuid", {name: 'user_id'})
  userId: number;
}
