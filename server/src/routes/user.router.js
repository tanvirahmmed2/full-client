const express = require("express");
const { User } = require("../model/user.model");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("user router activated");
});

userRouter.post("/", (req, res) => {
  const { username, password } = req.body;

  const newUser= new User({username, password})

  res.status(200).send({
    message: "post on user activated",
    payload: { newUser }
  });
});

module.exports = userRouter;