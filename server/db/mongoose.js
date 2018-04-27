var mongoose = require('mongoose');

mongoose.Promise = global.Promise;   // set up the mongoose promise
mongoose.connect(process.env.MONGODB_URI);

module.exports = {
  mongoose
};

process.env.NODE_ENV
