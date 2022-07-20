import express  from "express";

const app = express();
const app1 = express();

app.use(express.static('public'));
app.use(express.json());

const port = 80;
const port1 = 9090;

import route from './router/route';
app.use('/', route);

app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
  });

  app1.listen(port1, () => {
    return console.log(`Server is listening at http://localhost:${port1}`);
  });