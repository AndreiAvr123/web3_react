const router = require('express').Router()
const Person = require("../models/person")
const NotFoundError = require('../utils/NotFoundError')


// Find all persons
router.get('/', async (req, res) => {
    const persons = await Person.find({});
    res.json(persons)
})

// Find person by id
router.get('/:id', async (req, res, next) => {
    const id = req.params.id
    try {
        const person = await Person.findById(id)
        if (person) {
            res.json(person)
        } else {
            throw new NotFoundError(`Person with id ${id} not found`)
        }
    } catch (err) {
        next(err)
    }
})

// Delete person by id
router.delete('/:id', async (req, res, next) => {
    const id = req.params.id
    try {
        const person = await Person.findByIdAndDelete(id)
        if (person) {
            res.status(204).end()
        } else {
            throw new NotFoundError(`Person with id ${id} not found`)
        }
    } catch (err) {
        next(err)
    }
})

// Create new person
router.post('/', async (req, res, next) => {
    const body = req.body
    if (!body.name || !body.number) {
        return res.status(400).json({ error: 'name or number missing' })
    }
    const person = new Person({
        name: body.name,
        number: body.number
    })
    try {
        const savedPerson = await person.save()
        res.json(savedPerson)
    } catch (err) {
        next(err)
    }
})

// Update person by id
router.put('/:id', (request, response) => {
    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json({ error: 'name and number missing' })
    }
    const person = {
        name: body.name,
        number: body.number,
    }

    Person.findByIdAndUpdate(request.params.id, person).then(updatedPerson => {
        if (updatedPerson) {
            response.json(updatedPerson)
        } else {
            response.status(400).json({ error: 'error updating' })
        }
    })

})

module.exports = router
