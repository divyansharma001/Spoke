import { Router } from "express";
import { getOtherUser } from "../../../../controllers/getOtherUser.controller.js";
import isAuthenticated from "../../../../middlewares/isAuthenticated.middleware.js";

const UserRouter = Router();

UserRouter.get("/", isAuthenticated, getOtherUser);

export default UserRouter;
