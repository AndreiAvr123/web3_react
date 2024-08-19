const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const scoreSchema = new mongoose.Schema({
    username: String,
    date: Date,
    score: Number,
    joke: { type: ObjectId, ref: 'Joke' }
})

scoreSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Score', scoreSchema)