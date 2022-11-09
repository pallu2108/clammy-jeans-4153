const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({
    Heading : {type : String, required : true},
    Note : {type : String, required : true},
    Tag: {type : String, required : true},
    userId : {type : String, required : true}
})

const ProductModel = mongoose.model("note", productSchema)


module.exports = {
    ProductModel
}