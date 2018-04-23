// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'Richard', age: 28};
// var {name} = user;
// console.log(name);

//mongov2 code
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {   //dont need to create a database before you wanna connect it
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connceted to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID("5adaf4af0ad82236603e021c")
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to catch todos', err);
  // });

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to catch todos', err);
  });

  // db.close();
});
