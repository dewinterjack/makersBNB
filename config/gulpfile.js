var gulp = require('gulp');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/makersbnb";

gulp.task('createdb', function() {
  // take care of a db that already exists.
  console.log('Setting up database...');
  MongoClient.connect(url, function(err, db){
    var dbo = db.db("makersbnb");
    dbo.createCollection("users", function(err, res) {
      if (err) throw err;
      console.log("Database created!");
      db.close();
    });
  });
});