"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _k = require("k6");

var _http = _interopRequireDefault(require("k6/http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default() {
  var url = "http://localhost:9090/";

  var res = _http["default"].get(url);

  (0, _k.check)(res, {
    "is status 200": function isStatus200(r) {
      return r.status === 200;
    }
  }, {
    my_tag: res.body
  });
}