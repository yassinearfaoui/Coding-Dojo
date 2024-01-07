const Author = require('../controllers/author.controller')

module.exports = (app)=> {
    app.get('/api/authors', Author.getallauthors)
    app.post('/api/authors', Author.createAuthor)
    app.get('/api/authors/:id', Author.getoneAuthorById)
    app.put('/api/authors/:id', Author.updateOneAuthor)
    app.delete('/api/authors/:id', Author.deleteOneAuthor)
}
