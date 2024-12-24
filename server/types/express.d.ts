// express.d.ts
import { Request } from "express";

declare global {
    namespace Express {
        interface Request {
            userId?: string; //this makes the id available in the req.body
        }
    }
}
