const router = require('express').Router()
const Joke = require('../models/joke')

// Read all
router.get('/', async (req, res) => {
    const allJokes = await Joke.find({})
    res.json(allJokes)
})

// Read one (by id)
router.get('/:id', async (req, res, next) => {
    const idJoke = req.params.id
    try {
        const foundJoke = await Joke.findById(idJoke)
        if (foundJoke) {
            res.json(foundJoke)
        } else {
            throw new NotFoundError(`Person with id ${idJoke} not found`)
        }
    } catch (err) {
        next(err)
    }
})

// Delete one
router.delete('/:id', async (req, res, next) => {
    const idJoke = req.params.id
    try {
        const deletedJoke = await Joke.findByIdAndDelete(idJoke)
        if (deletedJoke) {
            res.status(204).end()
        } else {
            throw new NotFoundError(`Person with id ${idJoke} not found`)
        }
    } catch (err) {
        next(err)
    }
})

// Create one
router.post('/', async (req, res, next) => {
    const body = req.body
    if (!body.question || !body.answer || !body.category) {
        return res.status(400).json({ error: 'question, answer or category missing' })
    }

    if (body.question.length < 3 || body.answer.length < 3 || body.category.length < 3) {
        return res.status(400).json({ error: 'question, answer or category too short' })
    }

    const createdJoke = new Joke({
        question: body.question,
        answer: body.answer,
        category: body.category
    })
    try {
        const savedJoke = await createdJoke.save()
        res.json(savedJoke)
    } catch (err) {
        next(err)
    }
})


module.exports = router