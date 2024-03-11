import { Request, Response } from "express";

import Booking from "../model/Booking";

class BookingController {
  protected async bookPlace(req: Request, res: Response) {
    try {
      const { from, to, user } = req.body;

      const existingBookings = await Booking.find({
        $or: [
          {
            $and: [{ from: { $lte: from } }, { to: { $gte: from } }],
          },
          {
            $and: [{ from: { $lte: to } }, { to: { $gte: to } }],
          },
          {
            $and: [{ from: { $gte: from } }, { to: { $lte: to } }],
          },
        ],
      });

      if (existingBookings.length > 0) {
        // There is a booking for the current date
        return res
          .status(400)
          .json({ error: "Booking conflict for the requested date range" });
      }

      const newBooking = new Booking({ from, to, user });
      newBooking.save();
      return res.status(201).json({ message: "Booked Successfully" });
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
