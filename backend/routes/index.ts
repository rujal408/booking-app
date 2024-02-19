import express from "express";
import UserRoutes from "./user";
import cors from "cors";

class Routes {
  public app: express.Application;
  public userRoutes: UserRoutes;

  constructor(app: express.Application) {
    this.app = app;
    this.userRoutes = new UserRoutes();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.app.use(express.json()); // convert the request body into json (parse)
    this.app.use(express.urlencoded());
    this.app.use(cors());
    this.app.use("/api", this.userRoutes.router);  }
}

export default Routes;
