const{Router}=require("express")
const {userModel}= require("../models/User.model")

const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
require('dotenv').config()
const userRoutes=Router()

userRoutes.get("/",(req,res)=>{
    res.send("This is homepage")
})
userRoutes.post("/signup", async(req,res)=>{
    let{email, password, role}=req.body

    try{
        let user = await userModel.findOne({email:email})
        if(user){
           return res.status(409).send("Already Registered, Please Login")
        }
        else{
            bcrypt.hash(password,6,async function(err,hash){
                if(err){
                    res.send({"Error":"Something wrong"})
                }else{
                    const newUser= new userModel({email, password:hash, role})
                    await newUser.save()
                    res.send({"message":"Succesfully Registered"})
                }
            })
        }
    }catch(err){
        return res.status(401).send(e.message)
    }

})

userRoutes.post("/login",async(req,res)=>{
    let {email,password}= req.body
    let user = await userModel.findOne({email})
    let hash = user.password
    bcrypt.compare(password,hash,async function(err,result){
        if(user && result){
            var token = jwt.sign({userId: user._id},process.env.privateKey);
            res.send({
                message:"Login Successful",
                token
            })

        }else{
            res.send({"Error":"Something Error"})
        }
    })
})

module.exports={
    userRoutes
}