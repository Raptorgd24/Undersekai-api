import { getUserLoginController } from "../controllers/getUserLoginController"
import { Router } from "express"


export function getUserLoginRoute (router: Router) {
    router.get("/v1/user/login", new getUserLoginController().run)
}
