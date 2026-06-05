import { getUserLoginController } from "../controllers/getUserLoginController"
import { Router } from "express"


export function getUserLoginRoute (router: Router) {
    router.post("/v1/user/login", new getUserLoginController().run)
}
