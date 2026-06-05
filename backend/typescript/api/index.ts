import "dotenv/config"
import { Server } from "../src/server"
import cors from "cors"

const server = new Server()
server.registerMiddlewares()
server.registerRoutes()

const app = server.getApp()

// Manejar preflight explícitamente a nivel de entry point
app.options('*', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'https://undersekai-8ejq.vercel.app')
    res.set('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS')
    res.set('Access-Control-Allow-Headers', 'Content-Type')
    res.sendStatus(200)
})

export default app