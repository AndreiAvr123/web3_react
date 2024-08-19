const router = require('express').Router()
const Joke = require('../models/joke')

// Read all jokes
router.get('/', async (req, res) => {
    const jokes = await Joke.find({})
    return res.json(jokes)
})

// Read one joke
router.get('/:id', async (req, res) => {
    const joke = await Joke.findById(req.params.id)
    if (joke) {
        return res.status(200).json(joke)
    } else {
        return res.status(404).send({ error: 'Not found' })
    }
})

// Delete one joke
router.delete('/:id', async (req, res) => {
    await Joke.findByIdAndDelete(req.params.id)
    return res.status(204).end()
})

// Create one joke
router.post('/', async (req, res) => {
    const { question, answer, category } = req.body
    if (!question || !answer || !category) {
        return res.status(400).send({ error: 'Missing fields' })
    }

    if (question.length < 3 || answer.length < 3 || category.length < 3) {
        return res.status(400).send({ error: 'Fields must be at least 3 characters long' })
    }

    const joke = new Joke(req.body)
    const savedJoke = await joke.save()
    return res.status(201).json(savedJoke)
})

module.exports = router