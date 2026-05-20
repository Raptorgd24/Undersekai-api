import { userHelper } from "../helpers/userHelper";
import { userService } from "../service/user/DeleteUser";
import { Request, Response } from "express";


export class deleteUserController {

    async run(req: Request, res: Response): Promise<Response> {
        try {
            const { email } = req.body;
            const service = new userService(new userHelper());

            await service.UserDeleteService(email);

            return res.status(200).json({
                ok: true,
                message: "usuari eliminat correctament"
            });
        } catch (e: any) {
            console.error("DELETE USER ERROR");
            console.error(e);

            return res.status(500).json({
                ok: false,
                message: e.message
            });
        }   
    }
}