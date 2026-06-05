import { Router } from "express"
import { getHealthRoute } from "./health"
import { getMeRoute } from "./getMe"
import { savefileRoute } from "./savefile"
import { get } from "http"
import { getUserRegisterRoute } from "./UserRegister"
import { getUserLoginRoute } from "./UserLogin"
import { getPatchUserRecoverPasswordRoute } from "./RecoverPassword"
import { getDeleteUserRoute } from "./DeleteUser"

export function registerRoutes (): Router {
    const router = Router()
    
    getHealthRoute(router)
    getMeRoute(router)
    savefileRoute(router)
    getUserRegisterRoute(router)
    getUserLoginRoute(router)
    getPatchUserRecoverPasswordRoute(router)
    getDeleteUserRoute(router)

    return router
}
