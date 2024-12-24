import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const sendMessage = async (req: Request, res: Response) => {
  try {
    const sender_id = +req.body.id;
    const receiver_id = +req.params.id;
    const { message } = req.body;

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

    console.log(gotConversation);

    if (newMessage) {
      gotConversation.messages.push(newMessage)
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
