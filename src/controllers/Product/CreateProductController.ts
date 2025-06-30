import { Request, Response } from 'express';
import { CreateProductService } from '../../services/Product/CreateProductService';

class CreateProductController {
    async handle(req: Request, res: Response) {
        const { name, price, description, category_id } = req.body;

        const service = new CreateProductService();

        if (!req.file) {
            throw new Error('Não possui uma imagem');
        } else {
            const { originalname, filename: banner } = req.file;

            const response = await service.execute({
                name,
                price,
                description,
                banner,
                category_id
            });
    
            return res.json(response);
        }
    }
}

export { CreateProductController }