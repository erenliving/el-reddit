import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { User } from "./entities/User";

export default {
    dbName: 'el-reddit',
    user: 'postgres',
    password: 'whoisthisman',
    type: 'postgresql',
    debug: !__prod__,
    entities: [Post, User],
    migrations: {
        path: path.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/
    }
} as Parameters<typeof MikroORM.init>[0]