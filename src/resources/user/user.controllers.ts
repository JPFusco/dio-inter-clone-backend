import { Request, Response } from 'express';

import UserService from './user.service';

export class UserController {

    async signIn(req: Request, res: Response) {
        const { email, password } = req.body;
        const userService = new UserService();

        const user = await userService.signIn({ email, password })

        return res.status(200).send(user);
    }

    async signUp(req: Request, res: Response) {
        const userService = new UserService();

        const user = await userService.signUp(req.body);

        return res.status(200).send(user);
    }

    async me(req: Request, res: Response) {
        const userService = new UserService();

        const user = await userService.me(req.user);

        return res.status(201).send(user);
    }
}