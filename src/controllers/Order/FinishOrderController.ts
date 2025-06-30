import { Request, Response }  from "express";
import { FinishOrderService } from "../../services/Order/FinishOrderService";

class FinishOrderController {
    async handle(req: Request, res: Response) {
        const {order_id} = req.body;

        const service = new FinishOrderService();

        const response = await service.execute({order_id});

        return res.json(response);
    }
}

export { FinishOrderController }