const mongoose = require('mongoose')


const AuthorSchema = new mongoose.Schema({
    
    name : {
        type : String ,
        required : [true , "name is required"] ,
        minlength : [3 ,"name minlength is 3 characters"]
    }
},{timestamps : true})

const author = mongoose.model('author' , AuthorSchema)
module.exports = author ;