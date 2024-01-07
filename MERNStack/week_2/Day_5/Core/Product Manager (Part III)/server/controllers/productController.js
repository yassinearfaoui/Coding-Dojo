const product = require('../models/productModel')

module.exports.getallproducts = (req, res) => {
    product.find()
        .then(allproducts => {
            console.log("all jokes from DB", allproducts);
            res.status(200).json({ data: allproducts, message: "all products list", ok: true })
        })
        .catch(Err => {
            res.status(404).json({ Err })
        })
}

module.exports.createProduct = (req, res) => {
    product.create(req.body)
        .then(newProduct => {
            res.status(201).json({ data: newProduct, message: "product created successfully", ok: true })
        })
        .catch(error => {
            res.status(404).json({ error })
        })
}

module.exports.getoneproductById = (req, res) => {
    product.findById({ _id: req.params.id })
        .then(oneProduct => {
            res.status(200).json({ data: oneProduct, message: "product imported with sucess", ok: true })
        })
        .catch(error => {
            res.status(404).json({ error })
        })
}

module.exports.updateOneProduct = (req, res) => {
    product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedproduct => {
            console.log("product To Update", updatedproduct);
            res.status(200).json({ data: updatedproduct, message: 'product Updated with success', ok: true })

        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })
}      

module.exports.deleteOneproduct = (req,res) => {
    product.findByIdAndDelete({_id: req.params.id})
    .then(deletedproduct => {
        console.log("Deleted product", deletedproduct);
        res.status(200).json({ data: deletedproduct, message: 'product deleted with success', ok: true })
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ error })
    })
}