const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var flashcardSchema = new Schema({
    question: {type:String},
    answer: {type:String}
}, {
    collection: 'flashcards'
})

module.exports = mongoose.model('Flashcards', flashcardSchema)