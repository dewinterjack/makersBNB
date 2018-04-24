var express = require('express');
var path = require('path');

var users = require('./routes/users');
var spaces = require('./routes/spaces');
var index = require('./routes/index');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/users', users);
app.use('/spaces', spaces);




app.listen(9000, () => console.log('Example app listening on port 9000!'));
