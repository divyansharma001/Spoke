import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    try{
     const token = req.cookies.token;

     if(!token){
            res.status(401).json({
                message: "User is not authenticated"
            })
            return;
     }

     if(!process.env.JWT_SECRET_KEY){
        res.status(500).json({
            message: "Internal Server Error, Env not found"
        })
        return;
     }

     const decode = await jwt.verify(token, process.env.JWT_SECRET_KEY) as jwt.JwtPayload;

     if(!decode){
        res.status(401).json({
            message: "User is not authenticated"
        })
        return;
     }

      req.body.id = (decode as jwt.JwtPayload).userId;  //this makes the id available in the req.body

     next();

    }catch(error){
        console.error(error);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

export default isAuthenticated;