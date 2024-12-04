import { Request } from "express";

export interface RegisterRequest extends Request {
    body : {
        fullname: string;
        username: string;
        password: string;
        confirmPassword: string;
      }
};