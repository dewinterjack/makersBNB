let express = require('express');
let path = require('path');
var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/makersbnb_test');
// var place = require('../../models/places');

// let users = require('./routes/users');
// let spaces = require('./routes/spaces');
// let index = require('./routes/index');
let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
// app.use('/', index);
// app.use('/users', users);
// app.use('/spaces', spaces);

app.get('/', function(req, res) {
  
  var Schema = mongoose.Schema;
  var PlacesSchema = new Schema(
    {
      place_name: String,
      address: String,
      price_per_night: String
    }
  );
  var Place = mongoose.model('Place', PlacesSchema);

  var query = Place.find({  });

// selecting the `name` and `occupation` fields
  query.select('');

// execute the query at a later time
  query.exec(function (err, person) {
    if (err) return handleError(err);
  // Prints "Space Ghost is a talk show host."
  console.log(person);
});
// find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
  // Place.findOne({}, function (err, person) {
  //   if (err) return handleError(err);
  // // Prints "Space Ghost is a talk show host".
  //    console.log(err);
  //    console.log(person);
  // }());
  res.send('hello world')
})

app.listen(9000, () => console.log('Example app listening on port 9000!'));
