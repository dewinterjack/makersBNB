var User = require('../models/user.js');

exports.createUserGet = function(req, res) {
  res.render('signup', {title: 'Sign Up'});
};

exports.createUserPost = function(req, res) {
	res.send('NOT IMPLEMENTED: User create POST');
};
