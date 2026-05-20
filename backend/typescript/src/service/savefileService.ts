import { SaveFile, Route } from "../entities/savefile"
import { SavefileHelper } from "../helpers/savefileHelper"
import { v4 as uuidv4 } from "uuid"

export class savefileService {

    constructor (private readonly helper: SavefileHelper) {}

    async create (userId: string, charaName: string, playTime: number, Route: Route): Promise<SaveFile> {
        const sf = SaveFile.create(
            uuidv4(), userId, charaName, playTime, Route,
            new Date(), new Date(), null as unknown as Date
        )
        await (await this.helper.getRepository()).save(sf)
        return sf
    }

    async getLeaderboard (): Promise<SaveFile[] | []> {
        return await this.helper.getLeaderboard()
    }
}
