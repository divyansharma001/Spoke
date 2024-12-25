import { Router } from "express";
import { sendMessage } from "../../../../controllers/sendMessage.controller.js";
import isAuthenticated from "../../../../middlewares/isAuthenticated.middleware.js";
import { receiveMessage } from "../../../../controllers/receiveMessage.controller.js";

const MessageRouter = Router();

MessageRouter.post("/send/:id",isAuthenticated, sendMessage);
MessageRouter.get("/:id", isAuthenticated, receiveMessage);

export default MessageRouter;