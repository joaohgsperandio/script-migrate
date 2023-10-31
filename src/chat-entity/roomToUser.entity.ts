import { PrimaryColumn, Entity } from "typeorm";

@Entity({ name: "_RoomToUser" })
export default class _RoomToUsers {
  @PrimaryColumn("uuid")
  A: string;

  @PrimaryColumn("uuid")
  B: string;
}
