import "dotenv/config"
import { Server } from "./server"
import db from "./dataSourceConnection"

(async () => {
 await db
 await new Server().init(3000)
})()