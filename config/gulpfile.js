var gulp = require('gulp');
var mongoose = require('mongoose');
var url = "mongodb://localhost:27017/makersbnb_test";

gulp.task('createTestDB', function() {
	console.log('Setting up database...');
	mongoose.connect(url);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
});