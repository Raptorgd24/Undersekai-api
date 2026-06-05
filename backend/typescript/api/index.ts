import "dotenv/config"
import { Server } from "../src/server"

const server = new Server()
server.registerMiddlewaresPublic()
server.registerRoutesPublic()

export default server.getApp()