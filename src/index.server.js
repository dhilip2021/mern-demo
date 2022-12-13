const express = require("express");
const app= express();
const env = require("dotenv");
const cors = require("cors");


env.config();
app.use(cors())
app.use(express.json());






app.get("/",(req,res)=>{
    res.status(200).json({
        message:"welcome our server"
    })
})

app.post("/data",(req,res)=>{
    res.status(200).json({
        name:req.body.name,
        age:req.body.age
    })
})


app.listen(process.env.PORT,()=>{
    console.log(`Server Running our port ${process.env.PORT}`)
})

