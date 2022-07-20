"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var cont_1 = require("../controller/cont");
router.get('/IP', cont_1.extractIP);
exports["default"] = router;
