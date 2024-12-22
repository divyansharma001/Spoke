import { Response } from "express";
import { registerSchema } from "../schemas/register.schema.js";
import { RegisterRequest } from "../types/registerRequest.js";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();
export const signup = async (req: RegisterRequest, res: Response) => {
  try {
    const result = registerSchema.safeParse(req.body);

    if (!result.success) {
      res.status(400).json({ 
        message: "Validation Error",
        error: result.error.issues.forEach((issue) => {
          console.error(`Path: ${issue.path}, Message: ${issue.message}`);
        })
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


    if (existingUser) {
      res.status(400).json({
        message: "User already exists",
      });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    //handling profile photo

    const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?username=${username}`

    const user = await prisma.user.create({
      data: {
        email,
        username,
        fullname,
        password: hashedPassword,
        gender,
        profilephoto: gender == "male" ? maleProfilePhoto : femaleProfilePhoto 
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
