const router = require('express').Router()
const Joke = require('../models/joke')


router.get('/', async (req, res) => {
    const jokes = await Joke.find({})
    res.json(jokes)
})

router.post('/comments', async (req, res) => {
    const { jokeId, username, comment } = req.body
    if (!jokeId || !username || !comment) {
        return res.status(400).json({ error: 'Missing fields' })
    }

    if (comment.length < 5) {
        return res.status(400).json({ error: 'Comment must be at least 5 characters long' })
    }

    const jokeFound = await Joke.findById(jokeId)
    if (!jokeFound) {
        return res.status(404).json({ error: 'Joke does not exit' })
    }
    
    if (username.length < 3) {
        return res.status(400).json({ error: 'Username must be at least 3 characters long' })
    }

    const existingComment = jokeFound.comments.find((c) => c.username === username);

    if (existingComment) {
        return res.status(409).json({ error: 'User has already commented on this joke' });
    }
    
    const newComment = { jokeId: jokeFound.id, username, comment }
    jokeFound.comments.push(newComment)
    await jokeFound.save()
    return res.json(newComment)

})

module.exports = router