import express from "express";
import cors from "cors";
import dotEnv from "dotenv";
import mongo from "mongodb";

dotEnv.config();

const app = express();
const PORT = 3001;

app.use(express.json());

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
