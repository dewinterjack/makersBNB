let express = require('express');
let path = require('path');

let spaces = require('./routes/spaces');
let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/spaces', spaces);

app.listen(9000, () => console.log('Example app listening on port 9000!'));
