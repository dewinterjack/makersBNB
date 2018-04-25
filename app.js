let express = require('express');
let path = require('path');
<<<<<<< HEAD

//let users = require('./routes/users');
//let spaces = require('./routes/spaces');
//let index = require('./routes/index');
=======
let mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/makersbnb_test');
var Place = require('./models/places');
//let spaces = require('./routes/spaces');
>>>>>>> 375d21b64afff5a28c4cebd3e2fd0e4fd8b37757

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
<<<<<<< HEAD
//app.use('/', index);
//app.use('/users', users);
//app.use('/spaces', spaces);
=======
//app.use('/spaces', spaces);

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
>>>>>>> 375d21b64afff5a28c4cebd3e2fd0e4fd8b37757

app.listen(9000, () => console.log('Example app listening on port 9000!'));
