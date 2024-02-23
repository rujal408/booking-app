import { NextFunction, Request, Response } from "express";

class BookingController {
  protected async bookPlace(req: Request, res: Response, next: NextFunction) {}
  protected async getBookedList(
    req: Request,
    res: Response,
    next: NextFunction
  ) {}
}

export default BookingController;
