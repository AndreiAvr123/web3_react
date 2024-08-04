const router = require('express').Router()
const Score = require('../models/score')
const Joke = require('../models/joke')

// Read all
router.get('/', async (req, res) => {
    const allScores = await Score.find({})
    res.json(allScores)
})

// Create one
router.post('/', async (req, res, next) => {
    const body = req.body
    if (!body.username || !body.score || !body.joke) {
        return res.status(400).json({ error: 'username, score or joke missing' })
    }

    const foundIdJoke = Joke.findById(body.joke)
    if (!foundIdJoke) {
        return res.status(400).json({ error: 'Joke not found' })
    }

    if (body.username.length < 3) {
        return res.status(400).json({ error: 'username too short' })
    }

    const scoreAlreadyExists = await Score.findOne({ username: body.username,    score: body.score,    joke: body.joke})
    if (scoreAlreadyExists) {
        return res.status(400).json({ error: 'Score already exists' })
    }
    
    const createdScore = new Score({
        username: body.username,
        date: Date.now(),
        score: body.score,
        joke: body.joke
    })

    try {
        const savedScore= await createdScore.save()
        res.json(savedScore)
    } catch (err) {
        next(err)
    }
})


module.exports = router