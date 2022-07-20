import express  from "express";

const app = express();

app.use(express.static('public'));
app.use(express.json());

const port = 80;

app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
  });