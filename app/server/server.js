//server.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
require('./db')

//carol db setup test
const db = require('./db')
db();
//carol db setup test

let app = express();
const port = process.env.PORT || 8000;



app.use(cors());

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../../../build')));


// Express Route
const flashcardRoutes = require('./routes/flashcard.route')
app.use('/flashcards', flashcardRoutes)

// const userRoutes = require('./routes/user.route')
// app.use('/register',userRoutes)

app.use(require('./routes/user.route'))
app.use(require('./routes/authentication'))


app.get('/', (req, res)=> {
  res.send('Express server is up and running.');
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../../build', 'index.html'));
});

app.listen(port, _=> console.log(`The server is listening on port ${port}`));
