import { prismaClient } from "../../prisma";

class DeleteProductService {
    async execute(id: string) {
        const response = await prismaClient.product.delete({
            where: {
                id: id
            }
        })

        return response;
    }
}

export { DeleteProductService }