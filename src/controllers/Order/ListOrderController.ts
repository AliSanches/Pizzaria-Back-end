import { Request, Response } from "express";
import { ListOrderService }  from "../../services/Order/ListOrderService";

class ListOrderController {
    async handle(req: Request, res: Response) {
        const service = new ListOrderService();

        const response = await service.execute();

        return res.json(response);
    }
}

export { ListOrderController }