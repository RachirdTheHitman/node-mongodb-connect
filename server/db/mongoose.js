var mongoose = require('mongoose');

mongoose.Promise = global.Promise;   // set up the mongonse promise
mongoose.connect('mongodb://localhost: 27017/TodoApp');

module.exports = {
  mongoose
};
