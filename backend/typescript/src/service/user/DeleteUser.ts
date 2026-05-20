import { UserNotFound } from "../../errors/user/userNotFound";
import { userHelper } from "../../helpers/userHelper";

export class userService {

    constructor(private userHelper: userHelper) {}

    async UserDeleteService(email: string): Promise<void> {

        const user = await this.userHelper.findUserByEmail(email);

        if (!user) {
            throw new UserNotFound(
                `usuari amb email ${email} no es troba`
            );
        }

        await this.userHelper.deleteUser(user.id);
    }
}