const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    
    title : {
        type : String ,
        required : [true , "title is required"] 
    },
    price : {
        type : Number ,
        required : [true , "price is required"] 
    },
    description:{
        type : String ,
        required : [true , "description is required"] 
    }
},{timestamps : true})

const productManger = mongoose.model('productManger' , productSchema)
module.exports = productManger ;