const product = require('../controllers/productController')

module.exports = (app)=> {
    app.get('/api/products', product.getallproducts)
    app.post('/api/products', product.createProduct)
    app.get('/api/products/:id', product.getoneproductById)
    app.put('/api/products/:id', product.updateOneProduct)
    app.delete('/api/products/:id', product.deleteOneproduct)
}
