require('dotenv').config();

const express  = require('express');
require('dotenv').config()
const app  = express();

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

//  CONNECT WITH DATABASE
require('./config/mongoose.config');

// IMPORT ALL ROUTES
require('./routes/Joke.route')(app);

app.listen(process.env.PORT, () => {
    console.log('Server is running on port ',process.env.PORT);
});