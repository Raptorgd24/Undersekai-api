import { EntitySchema } from "typeorm"
import { User } from "../entities/user"

export const UserModel = new EntitySchema<User>({
    name: "User",
    tableName: "user",
    target: User,
    columns: {
        id: {
            type: String,
            primary: true
        },
        username: {
            type: String
        },
        email: {
            type: String
        },
        password: {
            type: String
        },
        isAdmin: {
            type: Boolean
        },
        CreatedAt: {
            type: Date
        },
        UpdatedAt: {
            type: Date
        },
        DeletedAt: {
            type: Date,
            nullable: true
        }
    }
})