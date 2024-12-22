import { Router } from "express";
import { signup } from "../../../../controllers/signup.controller";
import { signin } from "../../../../controllers/signin.controller";

const AuthRouter = Router();

AuthRouter.post("/signup", signup);
AuthRouter.post("/signin", signin)

export default AuthRouter;