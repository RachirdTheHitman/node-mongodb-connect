// var mongoose = require('mongoose');
//
// mongoose.Promise = global.Promise;   // set up the mongonse promise
// mongoose.connect('mongodb://localhost: 27017/TodoApp');
var express = require('express');
var bodyParser = require('body-parser');  // make the json data we pass in to a js object

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

//create middleware
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  // console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

// save new something
// create a model
// var Todo = mongoose.model('Todo', {
//   text: {
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default: null
//   }
// });

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved to todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });

// var newTodo = new Todo({
//   text: '   Edit this script   '
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved to todo', doc);
// }, (e) => {
//   console.log('Unable to save todo', e);
// });

// User model
// var User = mongoose.model('User', {
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     minlength: 1
//   }
// });

// var newUser = new User({
//   email: '    hya   cinthzy1@gmail.com    '
// });
//
// newUser.save().then((doc) => {
//   console.log('Saved to user', doc);
// }, (e) => {
//   console.log('Unable to save user', e);
// })
// email - require it - trim it - set type - set min length of 1
