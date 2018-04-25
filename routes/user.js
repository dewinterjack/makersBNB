// module.exports = function(app, passport){
//
// }

var express = require('express');
var router = express.Router();
var passport = require('passport');


var userController = require('../controllers/userController');


router.get('/profile', isLoggedIn, userController.showUserProfile);

router.get('/signup', userController.createUserGet); // form for user signup
router.post('/signup', userController.createUserPost);
 // submitting information to server etc.

function isLoggedIn(req, res, next){
	// user is logged in - will use either passport or sessions
	if(req.isAuthenticated()){
		return next();
	}
	// if not logged in take them to home page
	res.redirect('/')
}

module.exports = router;