const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {type:String},
    password: {type:String}
}, {
    collection: 'users'
})

module.exports = mongoose.model('Flashcards', userSchema)