const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      // validator: (value) => {
      //   return validator.isEmail(value);
      // },
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      require: true
    },
    token: {
      type: String,
      require: true
    }
  }]
});

//override method so that return only the id and email prop to user
UserSchema.methods.toJSON = function () {
  var user = this;
  var userObject = user.toObject();

  return _.pick(userObject, ['_id', 'email']);
};

UserSchema.methods.generateAuthToken = function () {
  var user = this;
  var access = 'auth';
  var token = jwt.sign({_id: user._id.toHexString(), access}, process.env.JWT_SECRET).toString();

  // user.tokens.push({access, token});
  user.tokens = user.tokens.concat([{access, token}]);

  return user.save().then(() => {     // return a promise in order to chain it in server.js
    return token;
  });
};

UserSchema.methods.removeToken = function (token) {
  var user = this;

  return user.update({
    $pull: {                             //$pull operator to remove anything matched in that array
      tokens: {token}
    }
  });
};

//method added into statics will be the model methods as opposed to the ones added to methods object, whchi will become the instance methods
UserSchema.statics.findByToken = function (token) {
  var User = this;
  var decoded;         // information after decoding the token( containing token information in the header ) sent by users.

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decoded);
  } catch (e) {
    // return new Promise((resolve, reject) => {
    //   reject();
    // });
    // same effect like the simlified version code below
    return Promise.reject();
  }

  return User.findOne({
    '_id': decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  });
};

UserSchema.statics.findByCredentials = function (email, password) {
  var User = this;

  return User.findOne({email}).then((user) => {
    if (!user) {
      // console.log('no user found!');
      return Promise.reject('user not found');
    }

    return new Promise((resolve, reject) => {
      //using bcrypt to compare password and user.password
      bcrypt.compare(password, user.password, (err, res) => {
        // console.log('this is the res value ', res);
        if (res) {
          resolve(user);
        } else {
          reject(err);
        }
      });
    });
  });
};

// adding middleware before each 'save' event fired
// some more functions need to be added
UserSchema.pre('save', function (next) {
  var user = this;

  if (user.isModified('password')) {                   // check whether the password is modified or not once user like to save it
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

var User = mongoose.model('User', UserSchema);

module.exports = {User};
