const mongoose= require("mongoose")

const userSchema= mongoose.Schema({
    URLSearchParamsname:{
        type: String,
        required: true,
        trim: true,
    },
    password:{
        type: String,
        required: true,
        trim: true,
    }

})

const User= mongoose.model("user" ,userSchema)
module.exports={
    User,

}