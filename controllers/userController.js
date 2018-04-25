var User = require('../models/user.js');
var bcrypt = require('bcrypt');

exports.createUserGet = function(req, res) {
  res.render('signup', {title: 'Sign Up'});
};

exports.createUserPost = function(req, res){

};

exports.showUserProfile = function(req, res){

};

