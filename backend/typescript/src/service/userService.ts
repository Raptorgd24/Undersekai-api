import { createHash } from "crypto"
import { User } from "../entities/user"
import { UserNotFound } from "../errors/user/userNotFound"
import { userHelper } from "../helpers/userHelper"
import { TokenManager } from "./tokenManagerService"


export class userService {

    constructor ( private readonly helper: userHelper ) {}

    // Busca un usuario por ID
    async findUserById (id: string): Promise<User> {

        const user = await this.helper.findUserById(id)

        if (!user) {
            throw new UserNotFound(`The user with id ${id} can't be reach`)
        }

        return user

    }

    // Hasha una contraseña usando SHA-512
    // SHA-512 produce un hash hexadecimal de 128 caracteres
    private hashPassword (password: string): string {
        return createHash("sha512").update(password).digest("hex")
    }

    // Verifica si la contraseña ingresada coincide con el hash almacenado
    private verifyPassword (passwordInput: string, passwordHash: string): boolean {
        const hashedInput = this.hashPassword(passwordInput)
        return hashedInput === passwordHash
    }

    // Realiza el login del usuario
    // Valida que el usuario exista y que la contraseña sea correcta
    // Si todo es válido, genera y retorna un token JWT
    async login (email: string, password: string): Promise<string> {
        
        // Busca el usuario en la BD por email
        const user = await this.helper.findByEmail(email)

        // Si el usuario no existe, lanza error
        if (!user) {
            throw new UserNotFound(`User with email ${email} not found`)
        }

        // Verifica que la contraseña sea correcta comparando hashes
        if (!this.verifyPassword(password, user.password)) {
            throw new Error("Invalid password")
        }

        // Si las credenciales son válidas, genera un token JWT
        // El token contiene el ID del usuario (sub) para identificarlo después
        const token = await TokenManager.generate({ sub: user.id })

        return token
    }

}