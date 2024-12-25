import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const receiveMessage = async(req: Request, res: Response) => {
    try {
        if(req?.userId === undefined){
            res.status(401).json({
                message: "User is not authenticated"
            })
            return;
        }
        const receiver_id = +req.params.id;
        const sender_id = +req.userId;
        const conversation = await prisma.conversation.findFirst({
            where: {
                participants: {
                    hasEvery: [sender_id, receiver_id]
                }
            },
            include: {
                messages: true
            }
        })

        console.log(conversation, "conversation");
    } catch (error) {
        console.error(error);
    }
}