const User = require("../models/userModels")

module.exports = (req,res)=>{
    User.findOne({email: req.body.email}).exec((error,user) =>{
        if(user) return res.status(400).json({
            message: "User already exits"
        })
    
        const {firstName, lastName,email, password} = req.body;
        const _user = new User({
            firstName, 
            lastName,
            email, 
            password,
            userName : Math.random().toString()
        })
        _user.save((err, data)=>{
            if(err){
               return res.status(400).json({
                    message: "something went wroung"
                })
            }
            if(data){
                return res.status(201).json({
                    // message : "user register successfully"
                    message : data
                })
            }
        })
    
       })
}