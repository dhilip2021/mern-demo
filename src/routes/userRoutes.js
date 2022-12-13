const express = require("express");
const userController = require("../controller/userController");
const router = express.Router();


router.post("/signin",(req,res)=>{

})

router.post("/signup",userController)

module.exports = router