import type { Request, Response } from "express";
import { prismaClient } from "db/client"

export async function createMeeting(req: Request, res: Response) {
    const { name } = req.body;
    await prismaClient.podcast.create({
        data: {
            name
        }
    })
    res.status(201).json({
        status: "meeting created"
    })
}