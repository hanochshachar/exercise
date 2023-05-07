"use strict";
exports.__esModule = true;
var express_1 = require("express");
var sortByIdCont_1 = require("./controllers/sortByIdCont");
var pageCont_1 = require("./controllers/pageCont");
var router = express_1["default"].Router();
router.get('/sorted-data', sortByIdCont_1.sortById)
    .get('/pagination', pageCont_1.getPagination);
exports["default"] = router;
