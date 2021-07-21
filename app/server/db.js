const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CapstoneDB', { useNewUrlParser: true,useUnifiedTopology: true } ,
err => {
    if(!err)
    console.log('db connecion successful')
    else
    console.log('db connection error: '. JSON.stringify(err, undefined, 2))
})