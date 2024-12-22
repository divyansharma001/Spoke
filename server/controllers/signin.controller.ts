import { Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { LoginRequest } from "../types/loginRequest";
import { loginSchema } from "../schemas/login.schema";

const prisma = new PrismaClient();
export const signin = async (req: LoginRequest, res: Response) => {
  try {
    const result = loginSchema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({
        message: "Validation Error",
        error: result.error.issues.forEach((issue) => {
          console.error(`Path: ${issue.path}, Message: ${issue.message}`);
        }),
      });
      return;
    }

    const { email, password } = result.data;

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      res.status(400).json({
        message: "User does not exist",
      });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(400).json({
        message: "Invalid Password",
      });
      return;
    }

    res.status(200).json({
      message: "User logged in successfully",
      user,
    });

    return;
  } catch (error) {
    console.error(error);
  }
};