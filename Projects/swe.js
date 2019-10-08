var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.pug');
});

app.get('/contract', function(req, res){
  res.send(__dirname + 'index2.pug');  
});

app.get('/profile/:name', function(req, res){
res.send('' + req.params.name);
});
// port for  the server to show up on the browser
var server = app.listen(3000, function(){
    console.log
})