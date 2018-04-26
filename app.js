var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
let mongoose = require('mongoose');
const spaceController = require('./controllers/spaceController.js');

mongoose.connect('mongodb://localhost:27017/makersbnb_test');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/spaces', spaceController.find_all_spaces);

app.get('/spaces/new', function (req, res) {
  res.render('addSpace');
});

app.post('/spaces/new', spaceController.create_space);
app.listen(9000, () => console.log('Example app listening on port 9000!'));

