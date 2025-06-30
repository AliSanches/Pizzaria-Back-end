import { Request, Response } from 'express'
import { AuthUserService }   from '../../services/User/AuthUserService'

class AuthUserController {
    async handle(req: Request, res: Response) {
        const data = req.body;
        const service = new AuthUserService();

        const response = await service.execute(data);

        return res.json(response)
    }
}

export { AuthUserController }