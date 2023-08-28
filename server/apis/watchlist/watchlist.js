import { Router } from "express";
import {
  documentExists,
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
  const id = details.details.id;
  const email = details.email;
  console.log(id, email);

  documentExists("watchList", {
    $and: [{ "details.details.id": id }, { "details.email": email }],
  }).then((x) => {
    if (x > 0) {
      console.log("exists");
      res.send({
        success: false,
      });
    } else {
      console.log("added");
      insertDocument("watchList", { details }).then((x) => {
        res.send({
          success: true,
        });
      });
    }
  });
});

export default watchListRouter;
