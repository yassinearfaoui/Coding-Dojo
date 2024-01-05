const mongoose = require('mongoose')
require('dotenv').config()

const db = process.env.db;
const Username = process.env.atlas_username ;
const password = process.env.atlas_password ;

const uri = `mongodb+srv://${Username}:${password}@firstdb.gbaggre.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri)
.then(()=> console.log((`established a connection to ${db}`)))
.catch(err => console.log("something went wrong when connecting to the database " , err));