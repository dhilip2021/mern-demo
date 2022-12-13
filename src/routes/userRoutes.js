const express = require("express");
const router = express.Router();

router.post("/signin",(req,res)=>{

})

router.post("/signup",(req,res)=>{
    res.status(200).json({
        name:req.body.name,
        age:req.body.age
    })
})

module.exports = router