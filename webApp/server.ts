import express  from "express";
// const dotenv = require('dotenv');
var os = require("os");
// dotenv.config();

const app = express();

app.use(express.static('public'));
app.use(express.json());

const port = 80;

import route from './router/route';
app.use('/', route);

app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
  });