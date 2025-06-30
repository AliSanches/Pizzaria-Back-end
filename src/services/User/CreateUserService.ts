import { prismaClient } from "../../prisma";
import { hash }         from "bcryptjs";

interface UserRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute(data: UserRequest) {

        if (!data.email) {
            throw new Error('Email não informado');
        }

        const isExiste = await prismaClient.user.findFirst({
            where: {
                email: data.email
            }
        });

        if (isExiste) {
            throw new Error('Email já existente!');
        }

        const passwordHash = await hash(data.password, 8);

        const response = prismaClient.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: passwordHash
            },
            select: {
                name: true,
                email: true
            }
        })

        return response;
    }
}

export { CreateUserService }