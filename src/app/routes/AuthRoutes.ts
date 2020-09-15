import { Router } from "express";
import AuthController from "@controllers/AuthController";
import AuthMiddlewares from "@middlewares/authMiddlewares";

const routes = Router();

routes.post("/authenticate", AuthMiddlewares.authenticate, AuthController.auth);
export default routes;
