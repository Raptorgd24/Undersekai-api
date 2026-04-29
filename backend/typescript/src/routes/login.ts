import { Router } from "express"
import { LoginController } from "../controllers/loginController"

// Define la ruta POST para el login
// Ruta: POST /v1/login
// Body esperado: { email: string, password: string }
// Response: { ok: boolean, token: string }
export function loginRoute (router: Router) {
    router.post("/v1/login", new LoginController().run)
}
