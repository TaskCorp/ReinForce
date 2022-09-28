const express = require("express");
const cors = require("cors");
import { NextFunction, Request, Response } from "express";
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;
const path = require("path");

const apiRouter = require("./routes/apiRouter");

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api", apiRouter);

// app.use(express.static(path.resolve(__dirname, "../../")));
app.use(express.static(path.resolve(__dirname, "../../bundle")));

// Serve static files
app.get("/", (req: any, res: any) => {
  res.sendFile(path.resolve(__dirname, "../../bundle/bundle.html"));
});

// Catch-all handler
app.use((req: any, res: any) => res.sendStatus(404));

// Global error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "An error occurred" },
  };
  const errObj = Object.assign(defaultErr, err);
  return res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
