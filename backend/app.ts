import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

class App {
  public app: express.Application;
  public port: number | undefined;

  constructor() {
    dotenv.config();
    this.app = express();
    this.connectDB();
  }

  connectDB() {
    const DB_URL = process.env.DB_NAME;

    if (DB_URL) {
      mongoose
        .connect(DB_URL)
        .then(() => {
          console.log("Connected...");
        })
        .catch((error) => {
          console.log("Error in Database");
        });
    }
  }

  listen() {
    const port = process.env.PORT;

    this.app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
  }
}

const app = new App();
app.listen();
