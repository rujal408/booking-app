import { Router } from "express";
import BookingController from "../controller/BookingController";
import authMiddleWare from "../middleware/auth";

class BookingRoutes extends BookingController {
  public router: Router;
  public path = "/booking";

  constructor() {
    super();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.use(authMiddleWare);
    this.router.post(`${this.path}`, this.bookPlace);
    this.router.get(`${this.path}/list`, this.getBookedList);
  }
}

export default BookingRoutes;
