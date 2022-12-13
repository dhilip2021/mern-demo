const express = require("express");
const app= express();
const env = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");


env.config();
app.use(cors())
app.use(express.json());

const connectionURL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.7phnzog.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;
mongoose.set('strictQuery', false);
mongoose.connect(connectionURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(console.log("DB Conncted"))



app.get("/",(req,res)=>{
    res.status(200).json({
        message:"welcome our local server"
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

