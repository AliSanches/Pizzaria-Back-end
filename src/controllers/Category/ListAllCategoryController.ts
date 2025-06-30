import { Request, Response }      from 'express'
import { ListAllCategoryService } from '../../services/Category/ListAllCategoryService';

class ListAllCategoryController {
    async handle(req: Request, res: Response) {
        const service = new ListAllCategoryService();

        const response = await service.execute();

        return res.json(response);
    }
}

export { ListAllCategoryController };