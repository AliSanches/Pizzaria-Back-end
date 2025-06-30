import { Request, Response }   from 'express';
import { AddItemOrderService } from '../../services/Order/AddItemOrderService';

class AddItemOrderController {
    async handle(req: Request, res: Response) {
        const data = req.body;

        const service = new AddItemOrderService();
        
        const response = await service.execute(data);
    
        return res.json(response);
    }
}

export { AddItemOrderController }