const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const eventSchema = new mongoose.Schema({
    date: Date,
    child: {
        type: ObjectId,
        ref: 'Child',
        required: true
    },
    name: String,
});

eventSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model('Event', eventSchema);