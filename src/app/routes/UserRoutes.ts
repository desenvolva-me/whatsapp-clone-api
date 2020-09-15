import { Router } from "express";
import UserController from "@controllers/UserController";
import UserMiddlewares from "@middlewares/userMiddlewares";

const routes = Router();

routes.post("/user", UserMiddlewares.create, UserController.create);
export default routes;
