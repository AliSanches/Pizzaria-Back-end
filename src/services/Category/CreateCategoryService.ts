import { prismaClient } from "../../prisma";

interface CategoryRequest {
    name: string;
}

class CreateCategoryService {
    async execute(data: CategoryRequest) {

        if (data.name === '') {
            throw new Error('Não pode ser vazio!');
        }

        const response = await prismaClient.category.create({
            data: {
                name: data.name
            }
        });

        return response;
    }
}

export { CreateCategoryService }