import { Request, Response } from "express";
import { DetailUserService } from "../../services/User/DetailUserService";

class DetailUserController {
    async handle(req: Request, res: Response) {
        const userId = req.user_id;

        const service = new DetailUserService();

        const user = await service.execute(userId);

        return res.json(user);
    }
}

export { DetailUserController }