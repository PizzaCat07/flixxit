import { Router } from "express";
import {
  getAllDocuments,
  getFilteredDocuments,
  insertDocument,
} from "../../utilities/database.js";
import { ObjectId, MongoClient } from "mongodb";
import { header } from "express-validator";
import jwt from "jsonwebtoken";

const watchListRouter = Router();
function getClient() {
  return new MongoClient(process.env.CONNECTION_STRING);
}

watchListRouter.get("/watchlist", (req, res) => {
  const email = req.headers.email;
  let query = { "details.email": email };

  getFilteredDocuments("watchList", query).then((x) => {
    res.send({
      x,
    });
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
