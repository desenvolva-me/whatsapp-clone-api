import express from "express";
import cors from "cors";

import AuthRoutes from "@routes/AuthRoutes";
import UserRoutes from "@routes/UserRoutes";
class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private routes() {
    this.express.use(AuthRoutes);
    this.express.use(UserRoutes);
  }
}
export default new App().express;
