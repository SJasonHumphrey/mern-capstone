//server.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
require('./db')
let app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../../../build')));


// Express Route
var userRoutes = require('./controllers/createUser')
app.use('/register', userRoutes)


app.get('/', (req, res)=> {
  res.send('Express server is up and running.');
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../../build', 'index.html'));
});

app.listen(port, _=> console.log(`The server is listening on port ${port}`));
