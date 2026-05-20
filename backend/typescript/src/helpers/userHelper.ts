import { Helper } from "./helper";
import { UserModel } from "../model/user.model";
import { EntitySchema } from "typeorm";
import { User } from "../entities/user";


export class userHelper extends Helper<User> {
    
    getEntitySchema(): EntitySchema<User> {
        return UserModel
    }

    async findUserById (id: string): Promise<User | null> {
        return (await this.getRepository()).findOneBy({id})
    }

    async createUser (user: User): Promise<void> {
        await (await this.getRepository()).save(user.getPrimitive())
    }

    async updateUser (user: User): Promise<void> {
        await (await this.getRepository()).save(user.getPrimitive())
    }

    async findUserByEmail (email: string): Promise<User | null> {
        return (await this.getRepository()).findOneBy({email})
    }
    async updateUserPassword (id: string, newPassword: string): Promise<void> {
        const user = await this.findUserById(id);
        if (!user) {
            throw new Error(`usuari amb id ${id} no es troba`)
        }
        const updatedUser = user.update(newPassword);
        await this.updateUser(updatedUser);
    }
    async deleteUser (id: string): Promise<void> {
        const user = await this.findUserById(id);
        if (!user) {
            throw new Error(`usuari amb id ${id} no es troba`)
        }
        const deletedUser = user.delete();
        await this.updateUser(deletedUser);
    }
}

