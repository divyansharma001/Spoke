import { Request } from "express";

export interface RegisterRequest extends Request {
    body : {
        email: string;
        fullname: string;
        username: string;
        password: string;
        confirmPassword: string;
      }
};