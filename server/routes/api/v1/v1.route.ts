import { Router } from "express";
import AuthRouter from "./auth/auth";

const V1Router = Router();

V1Router.use("/auth", AuthRouter);

export default V1Router;