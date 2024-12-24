import { Router } from "express";
import { rateLimit } from "express-rate-limit";
import ApiRouter from "./api/api.route.js";

const IndexRouter = Router();

const apiRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
});

IndexRouter.use("/api", apiRateLimiter, ApiRouter);

export default IndexRouter;
