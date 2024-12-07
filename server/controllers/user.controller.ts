import { Response } from "express";
import { registerSchema } from "../schemas/register.schema";
import { RegisterRequest } from "../types/registerRequest";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { register } from "module";
import { LoginRequest } from "../types/loginRequest";
import { loginSchema } from "../schemas/login.schema";

const prisma = new PrismaClient();
export const signup = async (req: RegisterRequest, res: Response) => {
  try {
    const result = registerSchema.safeParse(req.body);

    if (!result.success) {
      res.status(400).json({
        message: "Validation Error",
        error: result.error.flatten(),
      });
      return;
    }

    const { email, username, fullname, password, confirmPassword, gender } =
      result.data;

    if (password !== confirmPassword) {
      res.status(400).json({
        message: "Password and Confirm Password must match",
      });
      return;
    }

    const existingUser = await prisma.user.findFirst({
      where: {
        email,
        username,
      },
    });

    console.log(existingUser);

    if (existingUser) {
      res.status(400).json({
        message: "User already exists",
      });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        username,
        fullname,
        password: hashedPassword,
        gender,
      },
    });

    res.status(200).json({
      message: "User registered successfully",
      user,
    });

    return;
  } catch (error) {
    console.error(error);
  }
};

export const signin = async (req: LoginRequest, res: Response) => {
  try {
    const result = loginSchema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({
        message: "Validation Error",
        error: result.error.flatten(),
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
