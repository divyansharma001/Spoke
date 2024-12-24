import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const getOtherUser = async (req: Request, res: Response) => {
  try {
    if(req?.userId === undefined){
      res.status(401).json({
        message: "User is not authenticated"
      })
      return;
    }
    const loggedInUserId = +req?.userId;
    const otherUsers = await prisma.user.findMany({
      where: {
        NOT: {
          id: loggedInUserId,
        },
      },
      select: {
        id: true,
        username: true,
        fullname: true,
        profilephoto: true,
        email: true,
        gender: true,
      },
    });

    res.status(200).json(otherUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
