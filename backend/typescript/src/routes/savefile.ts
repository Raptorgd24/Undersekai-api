import { Router } from "express"
import { CreateSavefileController, GetLeaderboardController } from "../controllers/savefileController"
import { UserMiddleware } from "../middlewares/userMiddleware"

export function savefileRoute (router: Router) {
    router.post("/v1/savefile", new UserMiddleware().run, new CreateSavefileController().run)
    router.get("/v1/leaderboard", new GetLeaderboardController().run)
}
