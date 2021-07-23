const mongoose = require('mongoose');
const env = require('./config/env');


const connectDB = async () => {
    try {
await mongoose.connect(env.CONNECTION_URL, { useNewUrlParser: true,useUnifiedTopology: true })
console.log('db connection successful');
    } catch(err){
        console.log('db connection error'+err)
    }
}

connectDB();