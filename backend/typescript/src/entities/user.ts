import { Entity } from "./entity"


export class User implements Entity {
    constructor(
        readonly id: string,
        readonly username: string,
        readonly email: string,
        readonly password: string,
        readonly isAdmin: boolean,
        readonly createdAt: Date,
        readonly UpdatedAt: Date,
        readonly DeletedAt: Date
    ) {}

    getPrimitive () {
        return {
            id: this.id,
            nom: this.username,
            email: this.email,
            password: this.password,
            isAdmin: this.isAdmin,
           createdAt: this.createdAt,
           UpdatedAt: this.UpdatedAt
        }
    }

    static create (id: string, username: string, email: string, password: string, isAdmin: boolean, createdAt: Date, UpdatedAt: Date, DeletedAt: Date): User {
        return new User(id, username, email, password, isAdmin, createdAt, UpdatedAt, DeletedAt)
    }

    update (username: string): User {
        return new User(
            this.id,
            this.username,
            this.email,
            this.password,
            this.isAdmin,
            this.createdAt,
            new Date(),
            this.DeletedAt
        )
    }

    

}

// preguntar sobre tema de entitats de projecte (que es el que volem i com ho orientem)
// config docker i DBeaver