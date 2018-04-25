// module.exports = function(app, passport){
// 	// pass in app so we can access the other routes
// }

var passport = require('passport');
var express = require('express');
var router = express.Router();


var userController = require('../controllers/userController');

router.get('/', isLoggedIn, function(req, res, next){

});
router.get('/signup', userController.createUserGet); // form for user signup
router.post('/signup', userController.createUserPost); // submitting information to server etc.

function isLoggedIn(req, res, next){
	// user is logged in
	if(req.isAuthenticated()){
		return next();
	}
	// if not logged in take them to home page
	res.redirect('/')
}

module.exports = router;