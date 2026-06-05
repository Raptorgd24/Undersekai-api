import { Helper } from "./helper";
import { SaveFileModel } from "../model/savefile.model";
import { EntitySchema } from "typeorm";
import { SaveFile } from "../entities/savefile";



export class SavefileHelper extends Helper<SaveFile> {
    
    getEntitySchema(): EntitySchema<SaveFile> {
        return SaveFileModel
    }

   async getLeaderboard (): Promise<SaveFile[] | []> {
    return (await this.getRepository()).query('SELECT * FROM savefile ORDER BY "playTime" ASC LIMIT 15')
}

}