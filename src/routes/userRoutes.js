const express = require("express");
const { signup, signin, requireSignIn } = require("../controller/userController");
const router = express.Router();


router.post("/signup",signup);
router.post("/signin",signin);
// router.post("/profile",requireSignIn,(req,res)=>{
//     return res.status(200).json({
//         message:"profile"
//     })
// })

module.exports = router