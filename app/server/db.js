const mongoose = require('mongoose');
const env = require('./config/env');


const dbConnection = async () => {
    await mongoose.connect(env.CONNECTION_URL, { useNewUrlParser: true,useUnifiedTopology: true })
    console.log('db connecion successful');


}

module.exports = dbConnection;

// mongoose.connect(env.CONNECTION_URL, { useNewUrlParser: true,useUnifiedTopology: true } ,
// err => {
//     if(!err)
//     console.log('db connecion successful')
//     else
//     console.log('db connection error: '. JSON.stringify(err, undefined, 2))
// })