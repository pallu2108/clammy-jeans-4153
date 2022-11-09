const mongoose= require("mongoose")
const userSchema= new mongoose.Schema({
    email:{type:String, require:true},
    password:{type:String,require:true}
})

const userModel= mongoose.model("register",userSchema)

module.exports={
    userModel
}