import express from "express";
import dotenv from "dotenv";
const port = process.env.PORT || 5000;

export const app = express();

app.use('/*',express.static("client/build"));
app.use(express.json());

import router from "./API/router";
app.use("./images", router);

app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
  });