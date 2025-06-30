import { prismaClient } from "../../prisma"

class ListAllCategoryService {
    async execute() {
        const response = await prismaClient.category.findMany({
            select: {
                id: true,
                name: true,
            }
        })

        return response;
    }
}

export { ListAllCategoryService }