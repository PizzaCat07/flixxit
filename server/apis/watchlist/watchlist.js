import { Router } from "express";
import {
  getAllDocuments,
  getFilteredDocuments,
  insertDocument,
} from "../../utilities/database.js";
import { ObjectId } from "mongodb";
import { header } from "express-validator";
import jwt from "jsonwebtoken";

const watchListRouter = Router();

userRouter.get("/watchlist", (req, res) => {
  getAllDocuments("watchList").then((x) => {
    res.json({ x });
  });
});
