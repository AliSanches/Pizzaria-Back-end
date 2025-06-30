import { prismaClient } from "../../prisma";

interface OrderRequest {
    order_id: string;
}

class DetailOrderService {
    async execute({order_id}: OrderRequest) {
        const response = await prismaClient.item.findMany({
            where: {
                order_id: order_id
            }
        })

        return response;
    }
}

export { DetailOrderService }