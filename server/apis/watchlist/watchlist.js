import { Router } from "express";
import {
  deleteDocument,
  documentExists,
  getAllDocuments,
  getFilteredDocuments,
  insertDocument,
} from "../../utilities/database.js";
import { MongoClient } from "mongodb";

const watchListRouter = Router();

watchListRouter.get("/watchlist", (req, res) => {
  const email = req.headers.email;
  let query = { "details.email": email };

  getFilteredDocuments("watchList", query).then((x) => {
    res.send(x);
  });
});

watchListRouter.post("/watchList", (req, res) => {
  let details = req.body;
  const id = details.details.id;
  const email = details.email;

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

watchListRouter.delete("/watchList", (req, res) => {
  const _id = req.headers._id;
  console.log(_id);

  deleteDocument("watchList", _id).then((x) => {
    res.send(x);
  });
});

export default watchListRouter;
