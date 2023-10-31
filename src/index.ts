import ApiUser from "./api-entity/user.entity";
import ChatUser from "./chat-entity/user.entity";
import ChatMessage from "./chat-entity/message.entity";
import ApiMessage from "./api-entity/message.entity";
import ChatNotification from "./chat-entity/notification.entity";
import ApiNotification from "./api-entity/notification.entity";
import ChatRoom from "./chat-entity/room.entity";
import ChatRoomToUsers from "./chat-entity/roomToUser.entity";
import ApiRoomToUsers from "./chat-entity/roomToUser.entity";
import ChatChannel from "./chat-entity/channel.entity";
import { ApiDataSource, ChatDataSource } from "./data-source";

let apiUsers;
let chatUsers;
let messages;
let notifications;
let rooms;
let channels;
let roomToUsers;

ChatDataSource.initialize()
  .then(async () => {
    // Get all Chat users and creates a Hashmap indexing by id using javascript object to facilitate search through
    chatUsers = (
      await ChatDataSource.manager.getRepository(ChatUser).find()
    ).reduce((prev, current) => {
      return (prev[current.id] = current);
    }, {});

    // Get all messages
    messages = await ChatDataSource.manager.getRepository(ChatMessage).find();

    // Get all the notifications
    notifications = await ChatDataSource.manager
      .getRepository(ChatNotification)
      .find();

    // Get all rooms
    rooms = await ChatDataSource.manager.getRepository(ChatRoom).find();

    // Get all channels
    channels = await ChatDataSource.manager.getRepository(ChatChannel).find();

    roomToUsers = await ChatDataSource.manager
      .getRepository(ChatRoomToUsers)
      .find();
    console.log(
      chatUsers,
      messages,
      notifications,
      rooms,
      channels,
      roomToUsers
    );
  })
  .catch((error) => console.log(error));
// ApiDataSource.initialize()
//   .then(async () => {
//     // Get all Chat users and creates a Hashmap indexing by email using javascript object to facilitate search through
//     apiUsers = (
//       await ChatDataSource.manager.getRepository(ApiUser).find()
//     ).reduce((prev, current) => {
//       return (prev[current.email] = current);
//     }, {});
//     // Insert channels
//     ApiDataSource.manager.getRepository(ChatChannel).save(channels);
//     // Insert rooms
//     ApiDataSource.manager.getRepository(ChatRoom).save(rooms);
//     // Insert messages
//     ApiDataSource.manager.getRepository(ApiMessage).save(
//       messages.map((message) => ({
//         ...message,
//         senderId: apiUsers[chatUsers[message.senderId].email].id,
//       }))
//     );
//     // Insert notifications
//     ApiDataSource.manager.getRepository(ApiNotification).save(
//       notifications.map((notification) => ({
//         ...notification,
//         userId: apiUsers[chatUsers[notification.userId].email].id,
//       }))
//     );
//     // Insert roomToUsers
//     ApiDataSource.manager
//       .getRepository(ApiRoomToUsers)
//       .save(
//         roomToUsers.map((roomToUser) => ({
//           userId: roomToUser.B,
//           roomId: roomToUser.A,
//         }))
//       );
//   })
//   .catch((error) => console.log(error));
