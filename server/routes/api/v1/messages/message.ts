import { Router } from "express";
import { sendMessage } from "../../../../controllers/message.controller.js";

const MessageRouter = Router();

MessageRouter.post("/send/:id", sendMessage);

export default MessageRouter;