"use strict";
exports.__esModule = true;
var express_1 = require("express");
// const dotenv = require('dotenv');
// var os = require("os");
// dotenv.config();
var app = express_1["default"]();
app.use(express_1["default"].static('public'));
app.use(express_1["default"].json());
var port = 9090;
var route_1 = require("./router/route");
app.use('/', route_1["default"]);
app.listen(port, function () {
    return console.log("Server is listening at http://localhost:" + port);
});
