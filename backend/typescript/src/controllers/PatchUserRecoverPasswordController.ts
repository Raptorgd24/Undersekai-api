import { Request, Response } from "express";
import { userService } from "../service/user/PatchUserRecoverPassword";
import { userHelper } from "../helpers/userHelper";

export class patchUserRecoverPasswordController {

    async run(req: Request, res: Response): Promise<Response> {

        try {

            const { email, newPassword } = req.body;

            const service = new userService(new userHelper());

            await service.UserRecoverPasswordService(email,newPassword);

            return res.status(200).json({
                ok: true,
                message: "password actualitzada correctament"
            });

        } catch (e: any) {

            console.error("RECOVER PASSWORD ERROR");
            console.error(e);

            return res.status(500).json({
                ok: false,
                message: e.message
            });
        }
    }
}