import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const sendMessage = async (req: Request, res: Response) => {
  try {
   
    if(req?.userId === undefined){
      res.status(401).json({
        message: "User is not authenticated"
      })
      return;
    }

    const sender_id = +req?.userId;
    const receiver_id = +req.params.id;
    const { message } = req.body;

    console.log(sender_id, "sender_id");

    let gotConversation = await prisma.conversation.findFirst({
      where: {
        participants: {
          hasEvery: [sender_id, receiver_id],
        },
      },
      include: {
        messages: true,
      },
    });

    if (!gotConversation) {
      gotConversation = await prisma.conversation.create({
        data: {
          participants: [sender_id, receiver_id],
        },
        include: {
          messages: true,
        },
      });
    }

    const newMessage = await prisma.message.create({
      data: {
        receiver_id,
        sender_id,
        message,
      },
    });

    console.log(gotConversation, "gotConversation");
    console.log(newMessage, "newMessage");

    if (newMessage) {
      gotConversation.messages.push(newMessage)
    }

    res.status(200).json(gotConversation);

    return;

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
