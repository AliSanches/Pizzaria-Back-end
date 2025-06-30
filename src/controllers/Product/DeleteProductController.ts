import { Request, Response } from 'express'
import { DeleteProductService } from '../../services/Product/DeleteProductService';

class DeleteProductController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const service = new DeleteProductService();

        const response = service.execute(id);

        return res.json(response)
    }
}

export { DeleteProductController }