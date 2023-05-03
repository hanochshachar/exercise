"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const port = process.env.PORT || 5000;
exports.app = express_1.default();
exports.app.use('/*', express_1.default.static("client/build"));
exports.app.use(express_1.default.json());
const router_1 = __importDefault(require("./API/router"));
exports.app.use("./images", router_1.default);
exports.app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
});
