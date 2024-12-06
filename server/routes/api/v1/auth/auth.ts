import { Router } from "express";
import { signup } from "../../../../controllers/user.controller";

const AuthRouter = Router();

AuthRouter.post("/signup", signup);

export default AuthRouter;