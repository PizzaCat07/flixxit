import { Router } from "express";
import {
  deleteDocument,
  documentExists,
  getAllDocuments,
  getFilteredDocuments,
  insertDocument,
  updateRating,
} from "../../utilities/database.js";
import { ObjectId, MongoClient } from "mongodb";

const ratingRouter = Router();

ratingRouter.get("/rating", (req, res) => {
  const id = req.headers.id;
  const email = req.headers.email;

  getFilteredDocuments("rating", { id }).then((x) => {
    if (x.length > 0) {
      res.send(x);
    } else {
      insertDocument("rating", {
        id: id,
        rating: [],
        count: 0,
      }).then((x) => {
        getFilteredDocuments("rating", { id }).then((x) => {
          res.send(x);
        });
      });
    }
  });
});

ratingRouter.patch("/rating", (req, res) => {
  const id = req.headers.id;
  const newData = req.body;

  updateRating("rating", id, newData).then((x) => {
    getFilteredDocuments("rating", { id }).then((x) => {
      res.send(x);
    });
  });
});

export default ratingRouter;
