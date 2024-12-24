import { Router } from "express";
import { sendMessage } from "../../../../controllers/message.controller.js";
import isAuthenticated from "../../../../middlewares/isAuthenticated.middleware.js";

const MessageRouter = Router();

MessageRouter.post("/send/:id",isAuthenticated, sendMessage);

export default MessageRouter;