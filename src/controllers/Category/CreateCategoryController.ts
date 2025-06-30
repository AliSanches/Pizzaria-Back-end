import { Request, Response }     from 'express';
import { CreateCategoryService } from '../../services/Category/CreateCategoryService'; 

class CreateCategoryController {
    async handle(req: Request, res: Response) {
        const data = req.body;
        
        const service = new CreateCategoryService();

        const response = await service.execute(data);

        return res.json(response);
    }
}

export { CreateCategoryController }