import { stat } from "fs"
import { Entity } from "./entity"
enum Route {
    PACIFISTA = 'Pacifista',
    GENOCIDA = 'Genocida',
    NEUTRAL = 'Neutral'
    }
    
export class SaveFile implements Entity {
    constructor(
    readonly id: string,
    readonly userId: string,
    readonly charaName: string,
    readonly playTime: number,
    readonly route: Route,
    readonly createdAt: Date,
    readonly updatedAt: Date,
    readonly deletedAt: Date
    ) {}


    static create (id: string, userId: string, charaName: string, playTime: number, route: Route, createdAt: Date, updatedAt: Date, deletedAt: Date): SaveFile {
        return new SaveFile(id, userId, charaName, playTime, route, createdAt, updatedAt, deletedAt)
    }

    update (playTime: number): SaveFile {
        return new SaveFile(
            this.id,
            this.userId,
            this.charaName,
            playTime,
            this.route,
            this.createdAt,
            new Date(),
            this.deletedAt
        )
    }
    
    delete(): SaveFile {
        return new SaveFile(
            this.id,
            this.userId,
            this.charaName,
            this.playTime,
            this.route,
            this.createdAt,
            this.updatedAt,
            new Date()
        )
    }


}