import "dotenv/config"
import { Server } from "../src/server"
import db from "../src/dataSourceConnection"

const server = new Server()

const init = async () => {
  await db
  await server.init(3000)
}

init()

export default server.getApp()