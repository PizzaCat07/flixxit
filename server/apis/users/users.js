import { Router } from "express";
import {
  getAllDocuments,
  getFilteredDocuments,
  insertDocument,
} from "../../utilities/database.js";
import { ObjectId } from "mongodb";

const userRouter = Router();

//test to get all users
userRouter.get("/", (req, res) => {
  getAllDocuments("users").then((x) => {
    res.send(x);
  });
});

//create new account for signup
userRouter.post("/signup", (req, res) => {
  let { username, password, email } = req.body;

  insertDocument("users", { username, password, email }).then((x) => {
    res.send({
      success: true,
    });
  });
});

export default userRouter;
