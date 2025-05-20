import type { Request, Response } from "express";
import { prismaClient } from "db/client"
import { userSignUpSchema } from "../types/types";
import bcrypt from "bcryptjs";

export async function signUp(req: Request, res: Response) {
    const parsedBody = userSignUpSchema.safeParse(req.body);
    if (!parsedBody.success) {
        res.status(401).json({
            message: "Invalid Inputs",
            errors: parsedBody.error
        })
        return;
    }
    const user = await prismaClient.user.findFirst({
        where: {
            email: parsedBody.data.email
        }
    })
    if (user) {
        res.status(401).json({
            message: "user alreday exist"
        })
        return;
    }
    let hashedpassword = null;
    if (parsedBody.data.password) {
        hashedpassword = await bcrypt.hash(parsedBody.data.password, 10);
    }
    await prismaClient.user.create({
        data: {
            email: parsedBody.data.email,
            password: hashedpassword,
            name: parsedBody.data.name!
        }
    })
    res.status(201).json({
        message: "user created"
    })
}

export function signIn(req: Request, res: Response) {

}