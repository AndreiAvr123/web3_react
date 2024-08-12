const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    username: { type: String, required: true },
    comment: { type: String, required: true }
    // joke: { type: mongoose.Schema.Types.ObjectId, ref: 'Joke' }
});

/** 
const jokeSchema = new mongoose.Schema({
    name: String,
    joke: String,
    imageUrl: String,
    comments: [{
        username: { type: String, required: true },
        comment: { type: String, required: true }
    }]
})
*/
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