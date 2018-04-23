express = require('express');
app = express();
path = require('path');

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/hello', (req, res) => res.send('Greetings'));

app.get('/login', function(req, res) {
  res.sendFile(path.join(__dirname + '/test.html'));
});

app.listen(9000, () => console.log('Example app listening on port 3000!'));