const mongoose = require('mongoose')

require('dotenv').config()

const DB = process.env.DB
const username = process.env.atlas_username
const password = process.env.atlas_password


const uri = `mongodb+srv://${username}:${password}@${DB}.gbaggre.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(uri)
.then(()=> console.log((`established a connection to ${DB}`)))
.catch(err => console.log("something went wrong when connecting to the database " , err));