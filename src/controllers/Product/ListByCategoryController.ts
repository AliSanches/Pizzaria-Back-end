import { Request, Response }     from 'express'
import { ListByCategoryService } from '../../services/Product/ListByCategoryService';

class ListByCategoryController {
    async handle(req: Request, res: Response) {
        const category_id = req.query.category_id as string;

        const service = new ListByCategoryService();

        const response = await service.execute({category_id});

        return res.json(response)
    }
}

export { ListByCategoryController }