import express from "express";
import cors from "cors";
import dotEnv from "dotenv";
import mongo from "mongodb";
import { getAllDocuments } from "./utilities/database.js";
import userRouter from "./apis/users/users.js";
import watchListRouter from "./apis/watchlist/watchlist.js";
import { authenticate } from "./utilities/middlewares.js";
import ratingRouter from "./apis/rating/rating.js";
import recentWatchedRouter from "./apis/recentWatched/recentWatched.js";
import path from "path";
import * as url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

dotEnv.config();

const app = express();
const PORT = 3001;

app.use(cors());

app.use(express.static(path.join(__dirname + "/public")));
app.use(express.json());

app.use("/", userRouter);
app.use("/", authenticate, watchListRouter);
app.use("/", authenticate, ratingRouter);
app.use("/", authenticate, recentWatchedRouter);

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
