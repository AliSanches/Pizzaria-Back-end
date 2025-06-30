import { prismaClient } from "../../prisma";

interface OrderRequest {
    table: number;
    name: string;
}

class CreateOrderService {
    async execute(data: OrderRequest) {
        const response = await prismaClient.order.create({
            data: {
                table: data.table,
                name: data.name
            }
        });

        return response;
    }
}

export { CreateOrderService }