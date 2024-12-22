import { Router } from "express";
import { signup } from "../../../../controllers/signup.controller.js";
import { signin } from "../../../../controllers/signin.controller.js";

const AuthRouter = Router();

AuthRouter.post("/signup", signup);
AuthRouter.post("/signin", signin)

export default AuthRouter;