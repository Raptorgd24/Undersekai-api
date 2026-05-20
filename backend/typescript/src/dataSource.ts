import "dotenv/config"
import { DataSource } from "typeorm"
import { UserModel } from "./model/user.model"
import { SaveFileModel } from './model/savefile.model'

export default new DataSource({
    type: "postgres",
    host: process.env.DB_HOST as string,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER as string,
    password: process.env.DB_PASS as string,
    database: process.env.DB_NAME as string,
    entities: [UserModel, SaveFileModel],
    migrations: ["persistence/*.js"]
})