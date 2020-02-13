// Express import
var express = require("express");
// Initializing express
var app = express();


var getPrime = require('./primeNumber');
var factorial = require('./factorial');

// Setting server
app.listen(3002, function(){
    console.log('Listening on port 3002');
});

app.get('/', function(req, res){
    const prm = getPrime.prime();
    res.send(prm);
});

app.get('/factorial/:numero', function(req, res){
    const numero = req.params.numero;
    const resultadoFactorial = factorial(numero);
    res.send(`El factorial de ${numero} es : ${resultadoFactorial}`);
});