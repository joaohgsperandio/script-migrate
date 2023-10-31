import ApiUser from "./api-entity/user.entity";
import ChatUser from "./chat-entity/user.entity";
import ChatMessage from "./chat-entity/message.entity";
import ApiMessage from "./api-entity/message.entity";
import ChatNotification from "./chat-entity/notification.entity";
import ApiNotification from "./api-entity/notification.entity";
import ChatRoom from "./chat-entity/room.entity";
import ApiRoom from "./api-entity/room.entity";
import ChatRoomToUsers from "./chat-entity/roomToUser.entity";
import ApiRoomToUsers from "./api-entity/roomToUser.entity";
import ChatChannel from "./chat-entity/channel.entity";
import ApiChannel from "./api-entity/channel.entity";
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
      return Object.assign(prev, { [current.id]: current })
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
    ApiDataSource.initialize()
      .then(async () => {
        // Get all Chat users and creates a Hashmap indexing by email using javascript object to facilitate search through
        apiUsers = (
          await ApiDataSource.manager.getRepository(ApiUser).find()
        ).reduce((prev, current) => {
          return Object.assign(prev, { [current.email]: current })
        }, {});
        // Insert channels
        ApiDataSource.manager.getRepository(ApiChannel).save(channels);
        // Insert rooms
        ApiDataSource.manager.getRepository(ApiRoom).save(rooms);
        // Insert messages
        ApiDataSource.manager.getRepository(ApiMessage).save(
          messages.map((message) => ({
            ...message,
            senderId: apiUsers[chatUsers[message.senderId].email]?.id,
          }))
        );
        // Insert notifications
        ApiDataSource.manager.getRepository(ApiNotification).save(
          notifications.reduce((prev, notification) => {
            if (apiUsers[chatUsers[notification.userId].email]?.id) {
              return prev.concat([{
                ...notification,
                userId: apiUsers[chatUsers[notification.userId].email]?.id,
              }])
            }
            return prev;
          }, [])
        );
        // Insert roomToUsers
        ApiDataSource.manager
          .getRepository(ApiRoomToUsers)
          .save(
            roomToUsers.reduce((prev, roomToUser) => {
              if (apiUsers[chatUsers[roomToUser.B].email]?.id) {
                return prev.concat([{
                  roomId: roomToUser.B,
                  userId: apiUsers[chatUsers[roomToUser.B].email]?.id,
                }])
              }
              return prev;
            }, [])
          );
      })
      .catch((error) => console.log(error));
  })
  .catch((error) => console.log(error));

