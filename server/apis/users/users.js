import { Router } from "express";
import {
  getAllDocuments,
  getFilteredDocuments,
  insertDocument,
} from "../../utilities/database.js";
import { ObjectId } from "mongodb";
import { header } from "express-validator";

const userRouter = Router();

//test to get all users
userRouter.get("/", (req, res) => {
  getAllDocuments("users").then((x) => {
    res.json({ x });
  });
});

userRouter.get(
  "/login",
  header("email").notEmpty(),
  header("password").notEmpty(),
  async (req, res) => {
    let email = req.headers.email;
    let password = req.headers.password;

    getFilteredDocuments("users", { email, password }).then((users) => {
      if (users.length > 0) {
        res.json({
          status: true,
          users,
        });
      } else {
        res.json({
          status: false,
        });
      }
    });
  }
);

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
