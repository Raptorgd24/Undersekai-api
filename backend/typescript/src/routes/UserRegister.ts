import { postUserRegisterController } from "../controllers/postUserRegisterController"
import { Router } from "express"


export function getUserRegisterRoute (router: Router) {
    router.post("/v1/user/register", new postUserRegisterController().run)
}