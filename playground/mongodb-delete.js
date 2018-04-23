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

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then(() => {
  //   console.log(result);
  // });

  // db.close();
});
