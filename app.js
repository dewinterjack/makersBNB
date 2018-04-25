let express = require('express');
let path = require('path');
let mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/makersbnb_test');
var Place = require('./models/places');
//let spaces = require('./routes/spaces');
let user = require('./routes/user');
let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

//app.use('/spaces', spaces);

app.use('/user', user);

app.get('/', function(req, res) {
 var query = Place.find({  });
// selecting the `name` and `occupation` fields
  query.select('');
  Place.create({place_name: 'Jack'});

// execute the query at a later time
  query.exec(function (err, person) {
    if (err) return handleError(err);
  // Prints "Space Ghost is a talk show host."
  console.log(person);
});

  res.send('hello world')
});

app.listen(9000, () => console.log('Example app listening on port 9000!'));
