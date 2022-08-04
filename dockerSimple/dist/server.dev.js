"use strict";

var express = require('express');

var dotenv = require('dotenv');

var os = require("os");

dotenv.config();
var app = express();
var port = 9090; // app.use(express.static('src'));

app.use(express.json());
app.get('/', function (req, res) {
  var _require = require('os'),
      networkInterfaces = _require.networkInterfaces;

  var nets = networkInterfaces();
  var results = Object.create(null); // Or just '{}', an empty object

  for (var _i = 0, _Object$keys = Object.keys(nets); _i < _Object$keys.length; _i++) {
    var name = _Object$keys[_i];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = nets[name][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var net = _step.value;
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
        var familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4;

        if (net.family === familyV4Value && !net.internal) {
          if (!results[name]) {
            results[name] = [];
          }

          results[name].push(net.address);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  res.send(results);
});
app.listen(port, function () {
  console.log('Server started on port ' + port);
});