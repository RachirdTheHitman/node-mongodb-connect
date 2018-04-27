var {User} = require('./../models/user');

//Building a middleware for repetitive use
var authenticate = (req, res, next) => {
  var token = req.header('x-auth');

  User.findByToken(token).then((user) => {
    if (!user) {
      // res.status(401).send();
      //do the same thing as above cause' will return an error to invoke the catch block next
      return Promise.reject();
    }

    req.user = user;
    req.token = token;
    next();
  }).catch((e) => {
    res.status(401).send();
  });
};

module.exports = {authenticate};
