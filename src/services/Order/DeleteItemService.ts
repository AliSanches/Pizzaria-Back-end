import { prismaClient } from "../../prisma";

interface ItemRequest {
    item_id: string;
}

class DeleteItemService {
    async execute({ item_id }: ItemRequest) {
        const response = await prismaClient.item.delete({
            where: {
                id: item_id
            }
        });

        return response;
    }
}

export { DeleteItemService }