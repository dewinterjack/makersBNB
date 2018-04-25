var User = require('../models/user.js');

exports.createUserGet = function(req, res) {
  res.render('signup', {title: 'Sign Up'});
};

exports.showUserProfile = function(req, res){
	// option to see/add places
	res.render('profile', {user: req.user});
};

