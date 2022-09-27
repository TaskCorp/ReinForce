const express = require("express");
import { Request, Response } from "express";
const apiController = require("../controllers/apiController");
const router = express.Router();

router.get(
  "/getTask",
  apiController.getTask,
  (req: Request, res: Response) => res.status(200).json(res.locals.tasks),
);

router.post(
  "/postTask",
  apiController.postTask,
  (req: Request, res: Response) => res.status(200).json(res.locals.tasks),
);

router.patch(
  "/updateTask",
  apiController.updateTask,
  (req: Request, res: Response) => res.status(200).json(res.locals.tasks),
);

router.delete(
  "/deleteTask/:_id",
  apiController.deleteTask,
  (req: Request, res: Response) => res.status(200).send("Task Deleted"),
);

module.exports = router;
