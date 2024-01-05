const Joke = require('../models/jokes.model')

module.exports.getalljokes = (req, res) => {
    Joke.find()
        .then(allJokes => {
            console.log("all jokes from DB", allJokes);
            res.status(200).json({ data: allJokes, mesage: "all movie list", ok: true })
        })
        .catch(Err => {
            res.status(404).json({ Err })
        })
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newjoke => {
            res.status(201).json({ data: newjoke, message: "joke created successfully", ok: true })
        })
        .catch(error => {
            res.status(404).json({ error })
        })
}

module.exports.getonejokeById = (req, res) => {
    Joke.findById({ _id: req.params.id })
        .then(oneJoke => {
            res.status(200).json({ data: oneJoke, message: "joke imported with sucess", ok: true })
        })
        .catch(error => {
            res.status(404).json({ error })
        })
}

module.exports.updateOneJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedJoke => {
            console.log("Joke To Update", updatedJoke);
            res.status(200).json({ data: updatedJoke, message: 'joke Updated with success', ok: true })

        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })
}      

module.exports.deleteOneJoke = (req,res) => {
    Joke.findByIdAndDelete({_id: req.params.id})
    .then(deletedJoke => {
        console.log("Deleted Movie", deletedJoke);
        res.status(200).json({ data: deletedJoke, message: 'Joke deleted with success', ok: true })
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ error })
    })
}