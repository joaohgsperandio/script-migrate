import "reflect-metadata"
import { DataSource } from "typeorm"
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const ChatDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123",
    database: "chat",
    synchronize: false,
    logging: false,
    entities: [`${__dirname}/chat-entity/*.entity.ts`],
    migrations: [],
    subscribers: [],
})

export const ApiDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123",
    database: "timofi",
    synchronize: false,
    logging: false,
    entities: [`${__dirname}/api-entity/*.entity.ts`],
    migrations: [],
    subscribers: [],
    namingStrategy: new SnakeNamingStrategy(),
})