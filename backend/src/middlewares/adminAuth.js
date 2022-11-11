const jwt = require('jsonwebtoken')
const {userModel} = require("../models/User.model")
require('dotenv').config()
const adminAuth = (req,res,next)=>{
    const token= req.headers?.authorization?.split(" ")[1]

    jwt.verify(token,process.env.privateKey,async function(err,decoded){
        if(err){
            res.status(400).send({"Error":"Something error"})
        }else{
            req.body.userId=decoded.userId
            let admin = await userModel.findOne({_id: decoded.userId});
            if(admin.role === "admin"){
                next()
            }
            else{
                res.status(400).send("Not Authorised, Contact Admin")
            }
        }
    })
}

module.exports={
    adminAuth
}