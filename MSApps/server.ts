import express from "express";
const port = process.env.PORT || 5000;
import dotenv from "dotenv";

export const app = express();

app.use('/*',express.static("client/build"));
app.use(express.json());