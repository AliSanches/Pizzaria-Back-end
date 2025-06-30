import { prismaClient } from "../../prisma";

interface ProductRequest {
    name: string;
    price: string;
    description: string;
    banner: string;
    category_id: string;
}

class CreateProductService {
    async execute(data: ProductRequest) {
        const response = await prismaClient.product.create({
            data: {
                name: data.name,
                price: data.price,
                description: data.description,
                banner: data.banner,
                category_id: data.category_id
            }
        })

        return response;
    }
}

export { CreateProductService }