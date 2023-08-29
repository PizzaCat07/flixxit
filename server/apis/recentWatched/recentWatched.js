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

export default recentWatchedRouter;
