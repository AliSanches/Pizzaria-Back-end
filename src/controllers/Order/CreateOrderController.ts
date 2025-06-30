import { Request, Response }  from 'express';
import { CreateOrderService } from '../../services/Order/CreateOrderService';

class CreateOrderController {
    async handle(req: Request, res: Response) {
        const data = req.body;

        const service = new CreateOrderService();
        
        const response = await service.execute(data);
    
        return res.json(response);
    }
}

export { CreateOrderController }