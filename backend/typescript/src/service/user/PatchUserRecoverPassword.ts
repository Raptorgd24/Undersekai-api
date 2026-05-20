import { createHash } from "crypto";
import { UserNotFound } from "../../errors/user/userNotFound";
import { userHelper } from "../../helpers/userHelper";

export class userService {

    constructor(private userHelper: userHelper) {}

    async UserRecoverPasswordService(
        email: string,
        newPassword: string
    ): Promise<void> {

        const user = await this.userHelper.findUserByEmail(email);

        if (!user) {
            throw new UserNotFound(
                `usuari amb email ${email} no es troba`
            );
        }

        const hashedPassword = createHash("sha512")
            .update(newPassword)
            .digest("hex");

        await this.userHelper.updateUserPassword(
            user.id,
            hashedPassword
        );
    }
}