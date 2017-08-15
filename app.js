var express = require('express')
var app = express()

var blockchain = require('blockchain.info');
var MyWallet = require('blockchain.info').MyWallet;
var blockexplorer = require('blockchain.info').blockexplorer;
var exchange = require('blockchain.info').exchange;
var pushtx = require('blockchain.info').pushtx;
var Recieve = require('blockchain.info').Recieve;
var Socket = require('blockchain.info').Socket;
var statistics = require('blockchain.info').statistics;

let mustacheExpress = require('mustache-express');
let mustache = require('mustache');
let pgp = require('pg-promise')();
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let router = express.Router();
let path = require('path');
let session = require('express-session');
let fetch = require("node-fetch");

let bcrypt = require('bcrypt');
let salt = 10;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(session({
  secret: 'SHOEBILLZ',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

// //renders landing page
app.get('/', function(req, res){
  res.render('landing/index')
});

// statistics.get('/', function(req, res){
//   res.render('landing/index')
// });

//sends request to the api and renders retrieved information on landing page
app.post('/', function(req, res){
  console.log("options on page")
  statistics.get()
    .then(function(body){
      return body;
    })
    .then(function(body){
      console.log(body)
    })
    // .then(function(){
    //     res.redirect("/")
    // })
    .catch(function(err){
        console.log(err)
    })

});


app.listen(4000, function () {
  console.log('blochchainApi app listening on port 4000!')
});

