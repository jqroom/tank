var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('GET request to homepage');
});

app.listen(1991);
