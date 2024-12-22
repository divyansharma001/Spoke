import { Request, Response, NextFunction } from 'express';

const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    try{
     const token = req.cookies.token;

     if(!token){
            res.status(401).json({
                message: "User is not authenticated"
            })
            return;
     }



    }catch(error){
        console.error(error);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}