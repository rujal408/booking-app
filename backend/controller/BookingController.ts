import { Request, Response } from "express";
import { getDateRange, setToEndOfDay, setToStartOfDay } from "../utils/dates";
import Booking from "../model/Booking";

class BookingController {
  protected async bookPlace(req: Request, res: Response) {
    try {
      const { from, to, user } = req.body;
      const ranges = getDateRange(from, to);

      for (const currentDate of ranges) {
        const existingBooking = await Booking.findOne({
          from: { $lte: setToEndOfDay(currentDate) },
          to: { $gte: setToStartOfDay(currentDate) },
        });

        if (existingBooking) {
          // There is a booking for the current date
          return res
            .status(400)
            .json({ error: "Booking conflict for the requested date range" });
        }
      }
      const newBooking = Booking.create({ from, to, user });
      return res
        .status(201)
        .json({ message: "Booked Successfully", data: newBooking });
    } catch (e) {
      //
    }
  }
  protected async getBookedList(req: Request, res: Response) {
    try {
      const response = await Booking.find({});
      return res.status(201).json({ data: response });
    } catch (e) {
      //
    }
  }
}

export default BookingController;
