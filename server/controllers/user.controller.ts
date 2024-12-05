import { Response } from "express";
import { registerSchema } from "../schemas/register.schema";
import { RegisterRequest } from "../types/registerRequest";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const register = async (req: RegisterRequest, res: Response) => {
  try {
    const result = registerSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: "Validation Error",
        error: result.error.flatten(),
      });
    }

    const { email, username, fullname, password, confirmPassword } = result.data;

    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Password and Confirm Password must match",
      });
    }

    const existingUser = await prisma.user.findFirst({
      where: {
        email,
      }
    })

    console.log(existingUser);

  } catch (error) {}
};
