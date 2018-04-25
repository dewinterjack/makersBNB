let express = require('express');
let path = require('path');
let mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/makersbnb_test');
var Place = require('./models/places');
//let spaces = require('./routes/spaces');

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

var userController = require('./controllers/userController');

app.get('/signup', userController.createUserGet);
app.post('/signup', userController.createUserPost);

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
