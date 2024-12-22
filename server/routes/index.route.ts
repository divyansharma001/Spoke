import { Router } from "express";
import ApiRouter from "./api/api.route.js";

const IndexRouter = Router();

IndexRouter.use("/api", ApiRouter);

export default IndexRouter;