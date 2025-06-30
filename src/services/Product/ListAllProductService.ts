import { prismaClient } from "../../prisma";

class ListAllProductService {
    async execute() {
        const response = await prismaClient.product.findMany({
            select: {
                id: true,
                name: true,
                description: true,
                price: true,
                banner: true,
                category_id: true,
            }
        })

        return response;
    }
}

export { ListAllProductService }