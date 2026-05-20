import { Entity } from "./entity"


export class User implements Entity {
    constructor(
        readonly id: string,
        readonly username: string,
        readonly email: string,
        readonly password: string,
        readonly isAdmin: boolean,
        readonly CreatedAt: Date,
        readonly UpdatedAt: Date,
        readonly DeletedAt: Date|null
    ) {}

    getPrimitive () {
        return {
            id: this.id,
            username: this.username,
            email: this.email,
            password: this.password,
            isAdmin: this.isAdmin,
            CreatedAt: this.CreatedAt,
            UpdatedAt: this.UpdatedAt,
            DeletedAt: this.DeletedAt
        }
    }

    static create (id: string, username: string, email: string, password: string, isAdmin: boolean, CreatedAt: Date, UpdatedAt: Date, DeletedAt: Date|null): User {
        return new User(id, username, email, password, isAdmin, CreatedAt, UpdatedAt, DeletedAt)
    }

    update (password: string): User {
        return new User(
            this.id,
            this.username,
            this.email,
            password,
            this.isAdmin,
            this.CreatedAt,
            new Date(),
            this.DeletedAt
        )
    }

     delete (): User {
        return new User(
            this.id,
            this.username,
            this.email,
            this.password,
            this.isAdmin,
            this.CreatedAt,
            this.UpdatedAt,
            new Date()
        )
    }

}