const { User } = require("../model/user.model");


const registerUser=(req, res) => {
  const { username, password } = req.body;

  const newUser= new User({username, password})

  res.status(200).send({
    message: "post on user activated",
    payload: { newUser }
  });
}


module.exports={
    registerUser
}