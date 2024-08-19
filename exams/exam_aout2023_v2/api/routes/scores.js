const router = require('express').Router()
const Score = require('../models/score')
const Joke = require('../models/joke')

// Read all scores
router.get('/', async (req, res) => {
    // const scores = await Score.find({}).populate('joke')
    const scores = await Score.find({})
    return res.json(scores)
})

// Create one score
router.post('/', async (req, res) => {
    const { username, score, joke } = req.body

    if (!username || !score || !joke) {
        return res.status(400).send({ error: 'Missing fields' })
    }

    if (typeof score !== 'number') {
        return res.status(400).send({ error: 'Score must be a number' })
    }

    if (score < 0 || score > 10) {
        return res.status(400).send({ error: 'Score must be between 0 and 10' })
    }

    if (username.length < 3) {
        return res.status(400).send({ error: 'Username must be at least 3 characters long' })
    }

    const jokeFound = await Joke.findById(joke)
    if (!jokeFound) {
        return res.status(404).send({ error: 'Joke not found' })
    }

 
    const existingScore = await Score.findOne({ username, joke: jokeFound.id });
    if (existingScore) {
        return res.status(409).send({ error: 'User has already given a score to this joke' });
    }

    const newScore = new Score({ username, date: Date.now(), score, joke: jokeFound.id })
    const savedScore = await newScore.save()
    return res.status(201).json(savedScore)

})

module.exports = router