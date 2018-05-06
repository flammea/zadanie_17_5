var express = require('express');
var app = express();

app.use('/store', function(req, res, next){
    console.log('Jestem pośrednikiem przy żądaniu do /store.');
    next();
});

app.get('/', function(req, res) {
    res.send('Hello world! --> Bez informacji o pośredniku przy żądaniu');
});

app.get('/store', function(req, res) {
    res.send('To jest sklep');
});




var server = app.listen(3000, function() {
    console.log('Przykładowa aplikacja nasłuchuje na http://localhost:3000');
});
