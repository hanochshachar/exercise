"use strict";

var express = require('express');

var dotenv = require('dotenv');

var os = require("os");

dotenv.config();
var app = express();
var port = 9090;
app.get('/', function (req, res) {
  res.send('hello world');
});
app.listen(port, function () {
  console.log('Server started on port ' + port);
});