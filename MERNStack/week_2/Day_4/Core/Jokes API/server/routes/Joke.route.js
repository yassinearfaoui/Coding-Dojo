const Jokecontroller = require('../controllers/joke.controller')

module.exports = (app)=> {
    app.get('/api/jokes', Jokecontroller.getalljokes)
    app.post('/api/jokes', Jokecontroller.createJoke)
    app.get('/api/jokes/:id', Jokecontroller.getonejokeById)
    app.put('/api/jokes/:id', Jokecontroller.updateOneJoke)
    app.delete('/api/jokes/:id', Jokecontroller.deleteOneJoke)
}
