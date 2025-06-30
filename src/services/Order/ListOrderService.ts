import { prismaClient } from "../../prisma";

class ListOrderService {
    async execute() {
        const response = await prismaClient.order.findMany({
            where: {
                status: false,
                draft: false,
            },
            orderBy: {
                created_at: "desc"
            }
        })

        return response;
    }
}

export { ListOrderService }