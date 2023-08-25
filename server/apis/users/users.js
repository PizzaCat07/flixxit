import { Router } from "express";
import {
  getAllDocuments,
  getFilteredDocuments,
  insertDocument,
} from "../../utilities/database.js";
import { ObjectId } from "mongodb";
import { header } from "express-validator";
import jwt from "jsonwebtoken";

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
        let token = jwt.sign(
          {
            email,
            username: users[0].username,
          },
          process.env.SECRET_KEY,
          { expiresIn: process.env.TOKEN_EXPIRE }
        );
        res.json({
          status: true,
          token,
        });
      } else {
        res.json({
          status: false,
          token: "",
        });
      }
    });
  }
);

//create new account for signup
userRouter.post("/signup", (req, res) => {
  let { username, email, password } = req.body;
  console.log(req.body);

  insertDocument("users", { username, password, email }).then((x) => {
    res.send({
      success: true,
    });
  });
});

export default userRouter;
