import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.js";

import userRoute from "./routes/user.js";
import studentRoute from "./routes/student.js";
import markRoute from "./routes/marks.js";

// init express
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static("api/public"));

// env config
const env = dotenv.config();

// init env variables
const PORT = process.env.PORT || 8080;

// api route
app.use("/api/v1/user", userRoute);
app.use("/api/v1/student", studentRoute);
app.use("/api/v1/marks", markRoute);

// express error handler
app.use(errorHandler);

// listen server
app.listen(PORT, () => {
  connectDB();
  console.log(`server is running at http://localhost:${PORT}`.bgGreen.black);
});
