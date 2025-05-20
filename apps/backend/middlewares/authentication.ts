import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";

export async function authentication(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        res.status(401).json({
            message: "Token not found"
        })
        return;
    }
    const user = jwt.verify(token,process.env.JWT_PASSWORD!) as JwtPayload;
    req.user = user.id;
    next();
}