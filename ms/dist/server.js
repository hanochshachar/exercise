"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = 4000;
app.use('/*', express_1["default"].static("client/build"));
app.use(express_1["default"].json());
var router_1 = require("./API/router");
app.use('./images', router_1["default"]);
app.listen(port, function () {
    return console.log("Server is listening at http://localhost:" + port);
});
