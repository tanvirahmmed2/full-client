const express = require("express");
const { User } = require("../model/user.model");
const { registerUser } = require("../controllers/user.controller");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("user router activated");
});

userRouter.post("/", registerUser);

module.exports = userRouter;