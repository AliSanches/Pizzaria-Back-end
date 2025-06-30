import { Request, Response }     from 'express'
import { ListAllProductService } from '../../services/Product/ListAllProductService'

class ListAllProductController {
    async handle(req: Request, res: Response) {
        const service = new ListAllProductService();

        const response = await service.execute();

        return res.json(response)
    }
}

export { ListAllProductController }