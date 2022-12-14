const User = require("../models/userModels");
const jwt = require("jsonwebtoken")

exports.signup = (req,res)=>{
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

exports.signin = (req,res) =>{

    User.findOne({email : req.body.email}).exec((error, user)=>{
        if(error) return res.status(400).json({error})
        if(user){
            if(user.authenticate(req.body.password)){
                const token = jwt.sign({_id: user._id},process.env.JWT_SECRETE, {expiresIn : "1h"})
                const {_id,firstName, lastName, email, role, fullName} = user;
                return res.status(200).json({
                    token,
                    user :{
                        _id,
                        firstName, 
                        lastName, 
                        email, 
                        role, 
                        fullName
                    }
                })
            }else{
                return res.status(400).json({
                    message : 'Invalid Password'
                })
            }
        }else{
            return res.status(401).json({
                message: "something went wrong!!"
            })
        }
    })

}

exports.requireSignIn =(req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRETE);
    req.user = user;
    next();
}