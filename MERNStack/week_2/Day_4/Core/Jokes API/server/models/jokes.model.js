const mongoose = require('mongoose')


const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "setup is required "],
        minlength: [3, "setup length must be greater then 3"]
    },
    punchline: {
        type: String,
        required: [true, "punchline is required"],
        minlength:[8 , "punchline length must be greater then 8"]
    }
},{timestamps:true})

const Joke = mongoose.model("Joke" , JokeSchema)
module.exports = Joke ;
