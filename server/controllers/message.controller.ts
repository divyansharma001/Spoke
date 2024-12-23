import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const sendMessage = async(req: Request, res: Response) => {
try {
    const senderId = req.body.id;
    const receiverId = req.params.id;
    const {message} = req.body;

    let gotConversation = await prisma.conversation.findFirst({
        where: {
          participants: {
            hasEvery: [senderId, receiverId] 
          }
        },
        select: {
          participants: true
        }
      });

      if (!gotConversation) {
        gotConversation = await prisma.conversation.create({
          data: {
            participants: [senderId, receiverId] 
          }
        });
      }
      
} catch (error) {
    console.error(error);
    res.status(500).json({
        message: "Internal Server Error"
    })
    
}
}