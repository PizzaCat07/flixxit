import { Router } from "express";
import {
  deleteDocument,
  documentExists,
  getAllDocuments,
  getFilteredDocuments,
  insertDocument,
  updateRating,
  addRating,
} from "../../utilities/database.js";
import { ObjectId, MongoClient } from "mongodb";

const ratingRouter = Router();

ratingRouter.get("/rating", (req, res) => {
  const id = req.headers.id;
  const email = req.headers.email;
  console.log("get rating");
  getFilteredDocuments("rating", { id }).then((x) => {
    if (x.length > 0) {
      res.send(x);
    } else {
      console.log("add blank");
      insertDocument("rating", {
        id: id,
        rating: [],
        downCount: 0,
        upCount: 0,
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
  const email = newData.rating.email;

  getFilteredDocuments("rating", {
    $and: [{ id }, { "rating.email": email }],
  }).then((x) => {
    if (x.length > 0) {
      console.log("update");
      updateRating("rating", id, newData).then((x) => {
        res.send(x);
      });
    } else {
      console.log("add");
      addRating("rating", id, newData).then((x) => {
        res.send(x);
      });
    }
  });

  /* addRating("rating", id, newData).then((x) => {
    getFilteredDocuments("rating", { id }).then((x) => {
      res.send(x);
    });
  }); */
});

export default ratingRouter;
