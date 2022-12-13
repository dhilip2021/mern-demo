const express = require("express");
const router = express.Router();

router.post("/sigup",(req,res)=>{

})

router.post("/signin",(req,res)=>{
    res.status(200).json({
        name:req.body.name,
        age:req.body.age
    })
})

module.exports = router