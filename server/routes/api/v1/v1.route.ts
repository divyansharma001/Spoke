import { Router } from "express";
import AuthRouter from "./auth/auth.js";
import UserRouter from "./users/user.js";

const V1Router = Router();

V1Router.use("/auth", AuthRouter);
V1Router.use("/user", UserRouter);

export default V1Router;