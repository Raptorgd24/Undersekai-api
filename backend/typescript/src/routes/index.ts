import { Router } from "express"
import { getHealthRoute } from "./health"
import { getMeRoute } from "./getMe"
import { loginRoute } from "./login"

export function registerRoutes (): Router {
    const router = Router()
    
    // Registra todas las rutas disponibles
    getHealthRoute(router)
    loginRoute(router)
    getMeRoute(router)

    return router
}