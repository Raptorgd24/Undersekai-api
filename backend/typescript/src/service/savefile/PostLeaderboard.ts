import { SavefileHelper } from "../../helpers/savefileHelper";
import { SaveFile,Route } from "../../entities/savefile";
import crypto from "crypto"



export class leaderboardService{

    constructor(private readonly helper: SavefileHelper) {}

    async PostLeaderboard(userId: string, file: string): Promise<SaveFile> {

        const lines = file.split("\n")


        const charaName = lines[1]!.trim();
        const playTime = Number(lines[9]?.trim());
        const routeRaw = lines[13]?.trim();


        let route: Route = Route.NEUTRAL

        if (routeRaw === "PACIFISTA") route = Route.PACIFISTA;
        if (routeRaw === "GENOCIDA") route = Route.GENOCIDA;
        if (routeRaw === "NEUTRAL") route = Route.NEUTRAL;
        if (routeRaw === "FAMA") route = Route.FAMA;

        const saveFile = SaveFile.create(
            crypto.randomUUID(),
            userId,
            charaName,
            playTime,
            route,
            new Date(),
            new Date(),
            new Date()
        )

        return saveFile;    
    }
}   