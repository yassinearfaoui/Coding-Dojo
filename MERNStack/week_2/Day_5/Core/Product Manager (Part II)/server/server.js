const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


//  CONNECT WITH DATABASE
require('./config/config.mongoose');

app.use(cors())

// IMPORT ALL ROUTES
require('./routes/product.routes')(app);


app.listen(process.env.port, ()=> {
    console.log('server is up and runnig on port ', process.env.port )
})