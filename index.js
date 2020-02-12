// Express import
var express = require("express");
// Initializing express
var app = express();
var getPrime = require('./primeNumber');

// Setting server
app.listen(3002, function(){
    console.log('Listening on port 3002');
});

app.get('/', function(req, res){
    const prm = getPrime.prime();
    res.send('Hawfe result = ' + prm);
});