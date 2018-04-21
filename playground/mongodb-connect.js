const MongoClient = require('mongodb').MongoClient;

//mongov2 code
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {   //dont need to create a database before you wanna connect it
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connceted to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Richard',
    age: 28,
    location: 'Melbourne'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert users', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});

// //mongo v3 code
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {   //dont need to create a database before you wanna connect it
//   if (err) {
//     return console.log('Unable to connect to MongoDB server');
//   }
//   console.log('Connceted to MongoDB server');
//   const db = client.db('TodoApp');     // get access to the TodoApp database
//
//   db.collection('Todos').insertOne({
//     text: 'Something to do',
//     completed: false
//   }, (err, result) => {
//     if (err) {
//       return console.log('Unable to insert todo', err);
//     }
//
//     console.log(JSON.stringify(result.ops, undefined, 2));
//   });
//
//   client.close();
// });
