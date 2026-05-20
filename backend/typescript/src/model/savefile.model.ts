import { EntitySchema } from "typeorm"
import { SaveFile,Route } from "../entities/savefile"

export const SaveFileModel = new EntitySchema<SaveFile>({
    name: "SaveFile",
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
            type: "enum",
            enum: Route,
        },
        createdAt: {
            type: Date
        },
        updatedAt: {
            type: Date
        },
        deletedAt: {
            type: Date,
            nullable: true
        }
    }
})