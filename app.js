let express = require('express');
let path = require('path');

<<<<<<< HEAD
//var users = require('./routes/users');
//var spaces = require('./routes/spaces');
//var index = require('./routes/index');

var app = express();
=======
let spaces = require('./routes/spaces');
let app = express();
>>>>>>> origin/views

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

<<<<<<< HEAD
//app.use(express.static(path.join(__dirname, 'public')));
//app.use('/', index);
//app.use('/users', users);
app.use('/spaces', function(req, res) {
  //dummy function with data
  function Space() {
    this.cost = 100;
    this.location = "London";
    this.id = "12345";
  }

  dummyPlaces = [];
  for (i = 0; i < 10; i++) {
    dummyPlaces.push(new Space());
  }
  console.log(dummyPlaces);
  res.render('spaces', {places: dummyPlaces});

});
=======
app.use(express.static(path.join(__dirname, 'public')));
app.use('/spaces', spaces);
>>>>>>> origin/views

app.listen(9000, () => console.log('Example app listening on port 9000!'));
