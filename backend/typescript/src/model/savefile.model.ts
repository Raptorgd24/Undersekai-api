import { EntitySchema } from "typeorm"
import { SaveFile } from "../entities/savefile"

export const SaveFileModel = new EntitySchema<SaveFile>({
    name: "savefile",
    tableName: "savefile",
    target: SaveFile,
    columns: {
        id: {
            type: String,
            primary: true
        },
        userId: {
            type: String
        },
        charaName: {
            type: String
        },
        playTime: {
            type: String
        },
        route: {
            type: Number
        },
        createdAt: {
            type: Date
        },
        updatedAt: {
            type: Date
        },
        deletedAt: {
            type: Date
        }
    }
})