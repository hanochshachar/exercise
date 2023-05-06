"use strict";
exports.__esModule = true;
var express_1 = require("express");
var imagesCont_1 = require("./imagesCont");
var router = express_1["default"].Router();
router.get("/getImages", imagesCont_1.getImagesByCategory);
exports["default"] = router;
