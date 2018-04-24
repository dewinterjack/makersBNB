let express = require('express');
let path = require('path');

//let users = require('./routes/users');
//let spaces = require('./routes/spaces');
//let index = require('./routes/index');

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
//app.use('/', index);
//app.use('/users', users);
//app.use('/spaces', spaces);

app.listen(9000, () => console.log('Example app listening on port 9000!'));
