import { Request, Response } from 'express'
import { CreateUserService } from '../../services/User/CreateUserService';  

class CreateUserController {
    async handle(req: Request, res: Response) {
        const data = req.body;
        const service = new CreateUserService();

        const response = await service.execute(data);

        return res.json(response);
    }
}

export { CreateUserController }