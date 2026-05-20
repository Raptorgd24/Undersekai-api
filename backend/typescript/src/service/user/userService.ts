import { User } from "../../entities/user";
import { v4 as uuidv4 } from "uuid";
import { createHash } from "crypto";
import { UserNotFound } from "../../errors/user/userNotFound";
import { userHelper } from "../../helpers/userHelper";

export class userService {

    constructor ( private readonly helper: userHelper ) {}

    private hashPassword(password: string): string {
        return createHash('sha512').update(password).digest('hex');
    }

    async findUserById (id: string): Promise<User> {

        const user = await this.helper.findUserById(id)

        if (!user) {
            throw new UserNotFound(`usuari amb id ${id} no es troba`)
        }

        return user

    }

    async UserRegister (username: string, email: string, password: string): Promise<User> {
        const id = uuidv4();
        const hashedPassword = this.hashPassword(password);

        const user = User.create(
        id,
        username,
        email,
        hashedPassword,
        false,
        new Date(),
        new Date(),
        null
        );
        await this.helper.createUser(user);
        return user;
    }

    async UserLogin (
        email: string,
        password: string
        ): Promise<User> {

        const user = await this.helper.findUserByEmail(email)

        if (!user) {
            throw new UserNotFound(`usuari amb email ${email} no es troba`)
        }

        const hashedPassword = this.hashPassword(password);
        if (user.password !== hashedPassword) {
            throw new Error("password incorrecte")
        }

        return user
    }


}