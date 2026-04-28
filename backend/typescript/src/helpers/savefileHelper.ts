import { Helper } from "./helper";
import { UserModel } from "../model/user.model";
import { EntitySchema } from "typeorm";


export class SavefileHelper extends Helper<Savefile> {
    
    getEntitySchema(): EntitySchema<Savefile> {
        return UserModel
    }

    async getLeaderboard (): Promise<Savefile[] | []> {
        return (await this.getRepository()).query('SELECT * FROM savefile ORDER BY score ASC LIMIT 15')
    }

}