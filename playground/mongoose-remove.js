const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => console.log(result));

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5ae1284a0d89ee1314c0c822'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('5ae1284a0d89ee1314c0c822').then((todo) => {
  console.log(todo);
});
