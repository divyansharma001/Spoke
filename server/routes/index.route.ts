import { Router } from "express";
import ApiRouter from "./api/api.route";

const IndexRouter = Router();

IndexRouter.use("/api", ApiRouter);

export default IndexRouter;