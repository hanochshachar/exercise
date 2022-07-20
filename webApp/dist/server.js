"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const app1 = express_1.default();
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
const port = 80;
const port1 = 9090;
const route_1 = __importDefault(require("./router/route"));
app.use('/', route_1.default);
app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
});
app1.listen(port1, () => {
    return console.log(`Server is listening at http://localhost:${port1}`);
});
