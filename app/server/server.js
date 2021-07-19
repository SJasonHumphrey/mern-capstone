//server.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const { MongoServerSelectionError } = require('mongodb');
let app = express();
const env = require('./config/env')

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../../../build')));

app.get('/', (req, res)=> {
  res.send('Express server is up and running.');
})





/**
 * SETTING UP DATABASE CONNECTION:
 */

async function main() {
  const uri = env.CONNECTION_URL
  const client = new MongoClient(uri);
  try{
    await client.connect();
    console.log('db server running')

    await listDatabases(client)

    // createFlashcard(client, {
    //   category: "",
    //   front: "",
    //   back: ""
    // })
  }
  catch(e){
    console.log(e)
  }finally {
    await client.close();
  }
}
main().catch(console.error);

async function listDatabases(client){
  const databasesList = await client.db().admin().listDatabases()
  console.log("Databases:")
  databasesList.databases.forEach(db => {
    console.log(`- ${db.name}`)
  })
}

/**
 * DOING CRUD FOR DB BELOW!!!  ************* CRUD **********
 */

//CREATE:
async function createFlashcard(client, newFlashcard) {
  const result = await client.db("Capstone").collection("flashcards").insertOne(newFlashcard)
  console.log(`New flashcard created with id: ${result.insertedId}`);
}

async function createMultipleFlashcards(client, newFlashcards){
  let result = await client.db("Capstone").collection("flashcards").insertMany(newFlashcards);

  console.log(`${result.insertedCount} new flashcards created`)
}











//GET request to server
app.get('/api', (req, res)=> {
  
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

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../../build', 'index.html'));
});

app.listen(port, _=> console.log(`The server is listening on port ${port}`));