import { patchUserRecoverPasswordController } from "../controllers/PatchUserRecoverPasswordController"
import { Router } from "express"


export function getPatchUserRecoverPasswordRoute (router: Router) {
    router.patch("/v1/user/recoverPassword", new patchUserRecoverPasswordController().run)
}