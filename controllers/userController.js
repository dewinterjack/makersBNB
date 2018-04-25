var User = require('../models/user.js');
var bcrypt = require('bcrypt');

exports.createUserGet = function(req, res) {
  res.render('signup', {title: 'Sign Up'});
};

exports.createUserPost = function(req, res){
	var email = req.body.email;
	bcrypt.hash(req.body.password, null, null, function(err, hash){
		var user = new User({email:email, password:hash});
		user.save().then(function(newUser){ // need to make mongo ready
			console.log("Added " + email + " to the database!");
			// req.session.regenerate(function(){
			// 	res.redirect('/index');
			// 	req.session.user = user;
			// });
		})
	});
};

exports.showUserProfile = function(req, res){

};

