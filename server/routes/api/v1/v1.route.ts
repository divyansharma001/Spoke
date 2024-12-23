import { Router } from "express";
import AuthRouter from "./auth/auth.js";
import UserRouter from "./users/user.js";
import MessageRouter from "./messages/message.js";

const V1Router = Router();

V1Router.use("/auth", AuthRouter);
V1Router.use("/user", UserRouter);
V1Router.use("/message", MessageRouter);

export default V1Router;