import "dotenv/config"
import { Server } from "../src/server"

const server = new Server()
server.registerMiddlewares()
server.registerRoutes()

export default server.getApp()