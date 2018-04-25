var passport = require('passport');
var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');

router.get('/signup', userController.createUserGet); // form for user signup
router.post('/signup', userController.createUserPost); // submitting information to server etc.

module.exports = router;