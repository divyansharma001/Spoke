import { Request, Response } from 'express';

export const getOtherUser = async (req: Request, res: Response) => {
try {
    const loggedInUserId = req.body.userId;
} catch (error) {
    console.error(error);
    res.status(500).json({
        message: "Internal Server Error"
    })
    
}
}