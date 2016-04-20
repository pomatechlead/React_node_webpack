/* Initializing passport.js */
var User = require('../models/user');
var local = require('./passport/local');
var google = require('./passport/google');


module.exports = function(app, passport, config) {
  // Configure Passport authenticated session persistence.

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  //use the following strategies
  passport.use(local);
  passport.use(google);
};
