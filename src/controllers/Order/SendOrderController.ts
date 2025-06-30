import { Request, Response }  from 'express';
import { SendOrderService }   from '../../services/Order/SendOrderService';

class SendOrderController {
    async handle(req: Request, res: Response) {
        const order_id = req.query.order_id as string;

        const service = new SendOrderService();
        
        const response = await service.execute({order_id});
    
        return res.json(response);
    }
}

export { SendOrderController }