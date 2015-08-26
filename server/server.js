"use strict"

// dependancies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// create app
var app = express();


//config
app.use(express.static('public'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(methodOverride());


// routes
app.get('/', function (req, res) {
  res.render('index');
});

app.get('algoAcademyQuestions', function (req, res) {
  res.jsonp(algoAcademyQuestions);
});

app.get('kidsAcademyQuestions', function (req, res) {
  res.jsonp(kidsAcademyQuestions);
});

app.get('schoolAcademyQuestions', function (req, res) {
  res.jsonp(schoolAcademyQuestions);
});

app.get('softAcademyQuestions', function (req, res) {
  res.jsonp(softAcademyQuestions);
});


// set up server
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});