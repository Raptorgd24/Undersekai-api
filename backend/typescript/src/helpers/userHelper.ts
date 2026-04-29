import { Helper } from "./helper";
import { UserModel } from "../model/user.model";
import { EntitySchema } from "typeorm";
import { User } from "../entities/user";


export class userHelper extends Helper<User> {
    
    getEntitySchema(): EntitySchema<User> {
        return UserModel
    }

    // Busca un usuario por su ID único
    async findUserById (id: string): Promise<User | null> {
        return (await this.getRepository()).findOneBy({id})
    }

    // Busca un usuario por email (usado para login)
    async findByEmail (email: string): Promise<User | null> {
        return (await this.getRepository()).findOneBy({email})
    }

    // Busca un usuario por username
    async findByUsername (username: string): Promise<User | null> {
        return (await this.getRepository()).findOneBy({username})
    }

    // Guarda un usuario en la base de datos
    async persist (user: User): Promise<void> {
        await (await this.getRepository()).save(user)
    }
}

