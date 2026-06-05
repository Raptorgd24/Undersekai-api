import cors from "cors"
import express, { Express } from "express"
import { registerRoutes } from "./routes"
import { json } from "body-parser"


export class Server {
    private app: Express = express()

    init(port: number) {
        this.registerMiddlewares()
        this.registerRoutes()

        this.app.listen(port, () => {
            console.log(`Listening port ${port}`)
        })
    }

public registerMiddlewares() {
    const corsOptions = {
        origin: [
            'http://localhost:3001',
            'https://undersekai-api.vercel.app',
            'https://undersekai-8ejq.vercel.app'
        ],
        methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type'],
        optionsSuccessStatus: 200
    }
    this.app.use(cors(corsOptions))
    this.app.use(json())
}

    public registerRoutes() {
        this.app.use(registerRoutes())
    }

    getApp() {
        return this.app
    }
}