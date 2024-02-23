import express from "express";
import UserRoutes from "./user";
import cors from "cors";
import BookingRoutes from "./booking";

class Routes {
  public app: express.Application;
  public userRoutes: UserRoutes;
  public bookingRoutes: BookingRoutes;

  constructor(app: express.Application) {
    this.app = app;
    this.userRoutes = new UserRoutes();
    this.bookingRoutes = new BookingRoutes();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.app.use(express.json()); // convert the request body into json (parse)
    this.app.use(express.urlencoded());
    this.app.use(cors());
    this.app.use("/api", this.userRoutes.router);
    this.app.use("/api", this.bookingRoutes.router);
  }
}

export default Routes;
