const mongoose = require('mongoose');

var PostFlashcard = mongoose.model('PostFlashcard',
{
    question: {type: String},
    answer: {type:String},
})

module.exports = {PostFlashcard}