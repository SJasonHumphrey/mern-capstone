
/**
 * SETTING UP DATABASE CONNECTION:
 */

// async function main() {
// const uri = env.CONNECTION_URL
// const client = new MongoClient(uri);

// let newFlashcards = [
//     {category: "A",
//     front: "FRONT1",
//     back: "BACK1"},
//     {category: "B",
//     front: "FrOnT2",
//     back: "BaCk2"},
//     {category: "B",
//     front: "front3",
//     back: "back3"},
//     {category: "A",
//     front: "FronT4",
//     back: "BacK4"}]

// try{
//     await client.connect();
//     console.log('db server running')
//     // await createMultipleFlashcards(client, newFlashcards)
//     // await findFlashcardbyCategory(client, "A")
//     // await updateFlashcardbyFront(client, "FRONT", {front: "TNORF"})
//     // await deleteFlashcard(client, "TNORF")

// }
// catch(e){
//     console.log(e)
// }finally {
//     console.log('db server closing')
//     await client.close();
// }
// }
// main().catch(console.error);


// /**
//  * DOING CRUD FOR DB BELOW!!!  ************* CRUD **********
//  */

// //CREATE (single flashcard):
// // async function createFlashcard(client, newFlashcard) {
// //   const result = await client.db("Capstone").collection("flashcards").insertOne(newFlashcard)
// //   console.log(`New flashcard created with id: ${result.insertedId}`);
// // }
// async function createMultipleFlashcards(client, newFlashArr){
// const result = await client.db("Capstone").collection("flashcards").insertMany(newFlashArr);
// console.log(`${result.insertedCount} new flashcards created`)
// }

// /**
//  * READ (cRud)
//  */
// async function findFlashcardbyCategory(client, cardCategory){
// const result = await client.db("Capstone").collection("flashcards").findOne({category: cardCategory});

// if(result){
//     console.log(`Listing found:`)
//     console.log(result)
// } else {
//     console.log(`Nothing found with ${cardCategory}`)
// }
// }

// /**
//  * UPDATING (crUd)
//  * upsert is a cool feature with Mongo that combines update and insert/create. 
//  * it's worth checking out but for now I have used regular update
//  */
// async function updateFlashcardbyFront(client, flashcardFront, updatedFlashcard){
// const result = await client.db("Capstone").collection("flashcards").updateOne({front: flashcardFront}, {$set: updatedFlashcard});

// console.log(`${result.matchedCount} docs matched search criteria`)
// console.log(`${result.modifiedCount} docs were updated`)
// }


// /**
//  * DELETE (cruD)
//  */
// async function deleteFlashcard(client, flashcardFront){
// const result = await client.db("Capstone").collection("flashcards").deleteOne({front: flashcardFront})
// console.log(`${result.deletedCount} document(s) was deleted`)
// }





