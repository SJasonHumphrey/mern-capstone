//server.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
let app = express();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//app.use(express.static(path.join(__dirname, '../../../build')));

app.get('/', (req, res)=> {
  res.json({'message':'Express server is up and running.'});
})

//GET request to server
app.get('/api', (req, res)=> {
  res.json({'message':'Express server is up and running.'});
});

//POST request to server
app.post('/api', (req, res)=> {

})

//DELETE request to server
app.delete('/api', (req, res)=> {
  
})

//PUT request to server
app.put('/api', (req, res)=> {
  
});

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../../../build', 'index.html'));
// });

app.listen(port, _=> console.log(`The server is listening on port ${port}`));