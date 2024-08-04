const router = require('express').Router()
const Joke = require('../models/joke')

// Get all jokes
router.get('/', async (req, res) => {
    const jokes = await Joke.find({})
    res.json(jokes)
})

// Add a comment to a joke
router.post('/comments/:id', async (req, res) => {
    const { comment, username } = req.body
    if (!comment || !username) {
        return res.status(400).json({ error: 'Missing comment or username' })
    }
    const joke = await Joke.findById(req.params.id)
    if (!joke) {
        return res.status(404).json({ error: 'Joke not found' })
    }

    if (comment.length < 5 || username.length < 3) {
        return res.status(400).json({ error: 'Comment or username too short'})
    }

     const existingComment = joke.comments.find(c => c.username === username);
     if (existingComment) {
         return res.status(400).json({ error: 'The user already did a comment in this joke' });
     }

    joke.comments.push({ username, comment })
    await joke.save()
    res.json({id : joke.id, username, comment})
})

module.exports = router