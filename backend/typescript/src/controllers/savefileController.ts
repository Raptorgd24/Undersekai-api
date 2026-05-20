import type { Request, Response } from "express"
import { SavefileHelper } from "../helpers/savefileHelper"
import { savefileService } from "../service/savefileService"

export class CreateSavefileController {

    async run (req: Request, res: Response): Promise<Response> {
        try {
            const userId = res.locals.userId
            const { charaName, playTime, route } = req.body

            if (!charaName || playTime === undefined || !route) {
                return res.status(400).json({ ok: false, message: "Faltan datos de partida" })
            }

            const service = new savefileService(new SavefileHelper())
            await service.create(userId, charaName, playTime, route)

            return res.status(201).json({ ok: true, message: "Partida guardada" })

        } catch(e) {
            console.error("savefile error:", e)
            return res.status(500).json({ ok: false, message: "Server error" })
        }
    }
}

export class GetLeaderboardController {

    async run (req: Request, res: Response): Promise<Response> {
        try {
            const service = new savefileService(new SavefileHelper())
            const lb = await service.getLeaderboard()
            return res.status(200).json({ ok: true, data: lb })
        } catch(e) {
            console.error("leaderboard error:", e)
            return res.status(500).json({ ok: false, message: "Server error" })
        }
    }
}
