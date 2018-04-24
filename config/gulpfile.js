var gulp = require('gulp');
var mongoose = require('mongoose');
var url = "mongodb://localhost:27017/makersbnb_test";

// order of execution
// 1. run app (node app.js)
// 2. createdb

gulp.task('createTestDB', function() {
	// take care of a db that already exists.
	console.log('Setting up database...');
	mongoose.connect(url);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
});