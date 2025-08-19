const { User } = require("../model/user.model");


const getUser= async(req,res,next)=>{
    const user= await User.find({})
    
    res.status(200).send({
        message: "user returned",
        payload: {user}
    })

}



const registerUser = (req, res) => {
  const { username, password } = req.body;

  const newUser = new User({ username, password });

  res.status(200).send({
    message: "post on user activated",
    payload: { newUser },
  });
};



module.exports = {
  registerUser,
  getUser,
};
