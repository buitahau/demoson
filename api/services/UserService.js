'use strict';

var User = require('../models/User');
//https://hackernoon.com/building-simple-point-of-sale-system-with-node-js-react-js-a0e51059ba33
var Datastore = require("nedb");

// Creates table user
var UserDB = new Datastore({
  filename: "./server/databases/user.db",
  autoload: true
});

module.exports = {
  listUsers: function (next){
    UserDB.find().exec(function(err, users){
      if(err) throw err;
      next(users);
    })
  }
};
