"use strict";

var express = require('express');

var dotenv = require('dotenv');

var os = require("os");

dotenv.config();
var app = express();
app.get('/', function (req, res) {
  res.send(os.hostname());
});
app.listen(process.env.LISTEN_PORT, function () {
  console.log('Server started on port ' + process.env.LISTEN_PORT);
});