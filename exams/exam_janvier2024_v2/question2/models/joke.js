const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const commentSchema = new mongoose.Schema({
    jokeId: { type: ObjectId, ref: 'Joke' },
    username: String,
    comment: String
})

const jokeSchema = new mongoose.Schema({
    name: String,
    joke: String,
    imageUrl: String,
    comments: [commentSchema]
})

jokeSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Joke', jokeSchema)