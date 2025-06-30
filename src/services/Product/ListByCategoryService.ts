import { prismaClient } from "../../prisma";

interface CategoryRequest {
    category_id: string;
}

class ListByCategoryService {
    async execute({ category_id }: CategoryRequest) {
        const response = await prismaClient.product.findMany({
            where: {
                category_id: category_id 
            },
            select: {
                id: true,
                name: true,
                description: true,
                price: true,
                banner: true               
            }
        })

        return response;
    }
}

export { ListByCategoryService }