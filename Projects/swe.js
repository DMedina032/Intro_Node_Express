var express = require('express');
var app = express();
var PORT = 3000;
const path = require('path');
// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/index.pug');
// });

// app.get('/contract', function(req, res){
//   res.send(__dirname + 'index2.pug');  
// });

// app.get('/profile/:name', function(req, res){
//   res.send('' + req.params.name);
// });

// var server = app.listen(3000, function(){
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log('app listening at http://localhost:3000', host, port);
// });
// console.log("app.listen() executed.");





// ...............
// 

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));







app.get("/", (request, response) =>{
  response.render('index.pug');
});
app.get("/about", (request, response) =>{
  response.render('index.pug',{
    title:'thinking critically ',
    message:'researching node and express'}
    );
});
// app.use(function(req, res, next){
//   if(err){
//     res.status(err.status || 500)
//     .type('txt')
//     .send(err.message || 'SERVER ERROR');
//   }
// })

let listener = app.listen(process.env.PORT || PORT, () =>{
  console.log('' + listener.address().port);
});