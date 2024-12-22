import { Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { LoginRequest } from "../types/loginRequest.js";
import { loginSchema } from "../schemas/login.schema.js";
import jwt from 'jsonwebtoken';

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
        message: "Incorrect Password",
      });
      return;
    }

    const tokenData = {
      userId: user.id,
    }

    if (!process.env.JWT_SECRET_KEY) {
      throw new Error("JWT_SECRET_KEY is not defined");
    }
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {expiresIn: "1d"});
    

    res.status(200).cookie("token", token, {maxAge: 1*24*60*60*1000, httpOnly: true, sameSite: 'strict'}).
    json({
      message: "User logged in successfully",
      // user, --> this is not safe to send to the client kyuki fir vo user ka password dekh skta hai
      id: user.id,
      username: user.username,
      fullname: user.fullname,
      profilephoto: user.profilephoto,
    });

    return;
  } catch (error) {
    console.error(error);
  }
};