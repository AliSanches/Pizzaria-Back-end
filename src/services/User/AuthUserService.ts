import { prismaClient } from "../../prisma";
import { compare }      from "bcryptjs";
import { sign }         from 'jsonwebtoken';

interface AuthRequest {
    email: string;
    password: string;
}

class AuthUserService {
    async execute(data: AuthRequest) {
        const user = await prismaClient.user.findFirst({
            where: {
                email: data.email,
            }
        });

        if (!user) {
            throw new Error('Email ou senha invalidos!');
        }

        const passwordCompared = await compare(data.password, user.password);

        if (!passwordCompared) {
            throw new Error('Email ou senha invalidos!');
        }

        const token = sign(
            // PAYLOAD
            {
                name: user.name,
                email: user.email
            },
            // SECRETKEY
            process.env.SECRETKEY,
            // OPTIONS
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        };
    }
}

export { AuthUserService }