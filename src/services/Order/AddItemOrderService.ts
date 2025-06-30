import { prismaClient } from "../../prisma";

interface ItemRequest {
    amount: number;
    order_id: string;
    product_id: string;
}

class AddItemOrderService {
    async execute(data: ItemRequest) {
        const response = await prismaClient.item.create({
            data: {
                amount: data.amount,
                order_id: data.order_id,
                product_id: data.product_id
            }
        });

        return response;
    }
}

export { AddItemOrderService }