import { NextFunction, Request, Response } from 'express'
import { verify }                          from 'jsonwebtoken'

interface PayLoad {
    sub: string;
}

export function isAuth(req: Request, res: Response, next: NextFunction) {
    const AuthToken = req.headers.authorization;

    if (!AuthToken) {
        return res.status(401).end();
    }

    const [, token] = AuthToken.split(" ");

    try {
        // Retorna o ID do USER
        const { sub } = verify(token, process.env.SECRETKEY) as PayLoad;

        req.user_id = sub;

        return next();
    } catch (error) {
        return res.status(401).end();
    }
}