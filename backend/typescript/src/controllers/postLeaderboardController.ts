import { Request, Response } from "express";
import { leaderboardService } from "../service/savefile/PostLeaderboard";

export class LeaderboardController {

    constructor(private readonly service: leaderboardService) {}

    async PostLeaderboard(req: Request, res: Response): Promise<void> {
        try {
            const userId = res.locals.user.id;

            if (!userId) {
                res.status(401).json({ error: "Unauthorized" });
                return;
            }

            if (!req.body.file) {
                res.status(400).json({ error: "No save file provided" });
                return;
            }

            const saveFile = await this.service.PostLeaderboard(userId, req.body.file);

            res.status(201).json(saveFile);

        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    }
}