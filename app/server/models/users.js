const mongoose = require('mongoose');

var users = mongoose.model('users', new mongoose.Schema({
    username: {type:String},
    password: {type:String}
}));

module.exports = {users};