import { prismaClient } from "../../prisma";

interface OrderRequest {
    order_id: string;
}

class DeleteOrderService {
    async execute({ order_id }: OrderRequest) {
        const response = await prismaClient.order.delete({
            where: {
                id: order_id
            }
        });

        return response;
    }
}

export { DeleteOrderService }