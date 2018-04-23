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

  //findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5add6e6a245d773d3320a9d3')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5adaf5b1d2440f33a8378f5e')
  }, {
    $set: {
      name: 'YiZhang'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
