import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

const app = express();
dotenv.config({
  path: "./env",
});
const port = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`server is running at port : ${port}`);
    });
  })
  .catch((error) => {
    console.log("mongodb connection faild", error);
  });
