import { Router } from "express";
import { signup } from "../../../../controllers/signup.controller.js";
import { signin } from "../../../../controllers/signin.controller.js";
import { logout } from "../../../../controllers/logout.controller.js";

const AuthRouter = Router();

AuthRouter.post("/signup", signup);
AuthRouter.post("/signin", signin)
AuthRouter.get("/logout", logout);

export default AuthRouter;