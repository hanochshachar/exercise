import express from "express";
const app = express();
const port: number = 4000;

app.use('/*',express.static("frontend/build"));
app.use(express.json());

 import router from "./API/router"; 
 app.use('/images', router);

app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`);
});
