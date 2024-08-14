const router = require('express').Router()
const Child = require('../models/child')

router.get('/', async (req, res) => {
    const children = await Child.find({})
    res.json(children)
})

module.exports = router