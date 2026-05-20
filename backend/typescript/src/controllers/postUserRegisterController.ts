import { Request, Response } from "express";
import { userService } from "../service/user/userService";
import { userHelper } from "../helpers/userHelper";

export class postUserRegisterController {

    async run(req: Request, res: Response): Promise<Response> {
        try {
            const { username, email, password } = req.body;

            const service = new userService(new userHelper());

            await service.UserRegister(username, email, password);
            
            return res.status(201).json({
                message: "usuari creat correctament"})
    

        }catch(e: any)  {

            console.error("REGISTER ERROR");
            console.error(e);
            console.error(e.message);
            console.error(e.stack);

                return res.status(500).json({
                ok: false,
                message: e.message
                })
            }
        }

}
