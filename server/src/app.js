const express= require("express")
const cors= require("cors")
const app=express()
app.use(cors())

app.get("/", (req,res)=>{
    res.send("server running")
})

module.exports= app