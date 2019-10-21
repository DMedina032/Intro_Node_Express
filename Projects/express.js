// var express = require('express');
// const path = require('path');
// var app = express();
// var PORT = 3000;
// const fetch = require('node-fetch');
// const url = "https: //api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0";

// app.use(express.static("public"));

// app.engine('pug', require('pug').__express);
// app.set("view engine", "pug")
// app.set("views" , path.join(__dirname,"views"));

// app.get("/", (req, res) => {
//     const raccoon = fetch(url)
//     .then(res => res.json())
//     .then(
//         (json) => {
//             res.render('index'), {
//                 data: json
//             }
//         })
//     });
    
// app.listen(3000);
// var app = express();

// // app.use/routes/etc...

// var server = app.listen(3033);
// var io = require('socket.io').listen(server);

// io.sockets.on('connection', function (socket) {
  
// });




//   app.get("/contact", (req, res) => {

//     res.render("contact", {
//       url:url
//     });
//     });
    
//     app.get("/mars", (req, res) => {
//       res.render("mars", {
//         url:url
//       });
//     })
