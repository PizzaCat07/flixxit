import { Router } from "express";
import {
  deleteDocument,
  documentExists,
  getAllDocuments,
  getFilteredDocuments,
  insertDocument,
} from "../../utilities/database.js";
import { ObjectId, MongoClient } from "mongodb";

const recentWatchedRouter = Router();

recentWatchedRouter.get("/profile", (req, res) => {
  const email = req.headers.email;

  getFilteredDocuments("recentWatched", { email }).then((x) => {
    res.json(x);
  });
});

recentWatchedRouter.post("/profile", (req, res) => {
  const id = req.headers.id;
  const email = req.headers.email;
  const { type, poster_path, genres } = req.body;
  const data = {
    id: id,
    email: email,
    type: type,
    poster_path: poster_path,
    genres: genres,
  };

  getFilteredDocuments("recentWatched", {
    $and: [{ id }, { email }],
  }).then((x) => {
    if (x.length > 0) {
      res.send({
        exists: true,
      });
    } else {
      insertDocument("recentWatched", data).then((x) => {
        res.send({
          success: true,
        });
      });
    }
  });
});

export default recentWatchedRouter;
