import { Request, Response } from 'express';

export const logout = (req: Request, res: Response) => {
try {
    res.status(200).cookie("token", "", {maxAge: 0, httpOnly: true, sameSite: 'strict'}).json({
        message: "User logged out successfully"
    })
    return;
} catch (error) {
    console.error(error);
}
}