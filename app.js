let express = require('express');
let path = require('path');
var bodyParser = require('body-parser');

//var users = require('./routes/users');
//var spaces = require('./routes/spaces');
//var index = require('./routes/index');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

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

app.use('/addspace', function(req, res) {
  res.render('addSpace');

});

app.post('/confirm_add', function(req, res) {
  
  var spaceName = req.body.spacename;
  var spaceAddress = req.body.spaceaddress;
  var spacePrice = req.body.spaceprice;
  var describe = req.body.spacedescription;

  console.log(spaceName + " " + spaceAddress + " " + spacePrice + " " + describe);
  res.redirect('/addspace');
});

app.listen(9090, () => console.log('Example app listening on port 9000!'));
