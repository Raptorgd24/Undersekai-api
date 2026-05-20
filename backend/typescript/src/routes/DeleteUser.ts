import { Router } from "express";
import { deleteUserController } from "../controllers/DeleteUserController";


export function getDeleteUserRoute (router: Router) {
    router.delete("/v1/user/delete", new deleteUserController().run)
}