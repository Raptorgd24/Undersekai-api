import { userHelper } from "../helpers/userHelper";
import { userService } from "../service/user/userService";
import { TokenManager } from "../service/tokenManagerService";
import { Request, Response } from "express";
export class getUserLoginController {
    async run (req: Request, res: Response): Promise<Response> {
        console.log('body', req.body);
        try {
            const { email, password } = req.body;
            const service = new userService(new userHelper());
            const user = await service.UserLogin(email, password);
            const token = await TokenManager.generate({ sub: user.id });
            return res.status(200).json({
                ok: true,
                token: token,
                data: user
            })
        } catch(e: any) {
            console.error(e);
            return res.status(500).json({
                ok: false,
                message: "error al iniciar sessió"
            })
        }
     }
}