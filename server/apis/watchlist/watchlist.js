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

watchListRouter.get("/watchlist", (req, res) => {
  getAllDocuments("watchList").then((x) => {
    res.json({ x });
  });
});

watchListRouter.post("/watchList", (req, res) => {
  let details = req.body;

  insertDocument("watchList", { details }).then((x) => {
    res.send({
      success: true,
    });
  });
});

export default watchListRouter;
