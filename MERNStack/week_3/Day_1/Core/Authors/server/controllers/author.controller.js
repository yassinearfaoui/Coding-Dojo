const author = require('../models/author.model')

module.exports.getallauthors = (req, res) => {
    author.find()
        .then(allAuthors => {
            console.log("all Authors from DB", allAuthors);
            res.status(200).json({ data: allAuthors , message: "all Authors list", ok: true })
        })
        .catch(Err => {
            res.status(404).json({ Err })
        })
}

module.exports.createAuthor = (req, res) => {
    author.create(req.body)
        .then(newAuthor => {
            res.status(201).json({ data: newAuthor, message: "New Author created successfully", ok: true })
        })
        .catch(error => {
            res.status(404).json({ error })
        })
}

module.exports.getoneAuthorById = (req, res) => {
    author.findById({ _id: req.params.id })
        .then(oneAuthor => {
            res.status(200).json({ data: oneAuthor, message: "Author imported with sucess", ok: true })
        })
        .catch(error => {
            res.status(404).json({ error })
        })
}



module.exports.updateOneAuthor = (req, res) => {
    author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedAuthor => {
            console.log("Author To Update", updatedAuthor);
            res.status(200).json({ data: updatedAuthor, message: 'Author Updated with success', ok: true })

        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })
}      

module.exports.deleteOneAuthor = (req,res) => {
    author.findByIdAndDelete({_id: req.params.id})
    .then(deletedAuthor => {
        console.log("deleted  Author", deletedAuthor);
        res.status(200).json({ data: deletedAuthor, message: 'Author deleted with success', ok: true })
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ error })
    })
}