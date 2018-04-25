var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/makersbnb_test');

var app = express();

require('./config/passport')(passport); // pass passport for configuration

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

var userController = require('./controllers/userController');

app.use(session({ secret: 'programmingisfun' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.get('/', function(req, res) {
	console.log('Hello World!');
	res.send('hello world');
});

// call controller, giving it the app and passport

app.get('/signup', userController.createUserGet);
app.post('/signup', passport.authenticate('local-signup', {
	successRedirect : '/profile', // /profile
	failureRedirect : '/signup',
	failureFlash : true
}));

app.get('/profile', userController.showUserProfile);

app.get('/login', function(req, res){
	console.log('Time to login!');
	res.render('login');
});

app.post('/login', passport.authenticate('local-login', {
	successRedirect : '/profile', // redirect to the secure profile section
	failureRedirect : '/login', // redirect back to the signup page if there is an error
	failureFlash : true // allow flash messages
}));


app.listen(9000, () => console.log('Example app listening on port 9000!'));
