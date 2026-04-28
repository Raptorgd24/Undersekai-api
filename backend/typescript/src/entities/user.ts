import { Entity } from "./entity"


export class User implements Entity {
    constructor(
        readonly id: string,
        readonly username: string,
        readonly email: string,
        readonly password: string,
        readonly isAdmin: boolean,
        readonly createdAt: Date,
        readonly updatedAt: Date,
        readonly deletedAt: Date
    ) {}


    static create (id: string, username: string, email: string, password: string, isAdmin: boolean, createdAt: Date, updatedAt: Date, deletedAt: Date): User {
        return new User(id, username, email, password, isAdmin, createdAt, updatedAt, deletedAt)
    }

    update (username: string): User {
        return new User(
            this.id,
            username,
            this.email,
            this.password,
            this.isAdmin,
            this.createdAt,
            new Date(),
            this.deletedAt
        )
    }
 

}

// preguntar sobre tema de entitats de projecte (que es el que volem i com ho orientem)
// config docker i DBeaver