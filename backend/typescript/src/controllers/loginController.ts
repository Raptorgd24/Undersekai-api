import type { Request, Response } from "express"
import { userService } from "../service/userService"
import { userHelper } from "../helpers/userHelper"
import { UserNotFound } from "../errors/user/userNotFound"

export class LoginController {

    // Maneja la solicitud POST de login
    // Extrae email y contraseña del body y realiza la autenticación
    async run (req: Request, res: Response): Promise<Response> {
        try {

            // Extrae email y password del cuerpo de la solicitud
            const { email, password } = req.body

            // Valida que se hayan proporcionado ambos campos
            if (!email || !password) {
                return res.status(400).json({
                    ok: false,
                    message: "Email and password are required"
                })
            }

            // Instancia el servicio de usuario con su helper (acceso a BD)
            const service = new userService(new userHelper())

            // Llama al método login que valida credenciales y genera token
            const token = await service.login(email, password)

            // Retorna el token si la autenticación fue exitosa
            return res.status(200).json({
                ok: true,
                token
            })

        } catch(e) {
            // Si el usuario no existe, retorna 404
            if (e instanceof UserNotFound) {
                return res.status(404).json({
                    ok: false,
                    message: "User not found"
                })
            }

            // Si hay cualquier otro error (contraseña inválida, error de servidor, etc)
            // retorna 401 (no autorizado)
            return res.status(401).json({
                ok: false,
                message: "Invalid credentials"
            })
        }
    }

}
