import { NextFunction, Request, Response } from "express";

class UserController {
  protected async loginUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password } = req.body;
    } catch (e) {
      //handle error
    }
  }
}

export default UserController;
