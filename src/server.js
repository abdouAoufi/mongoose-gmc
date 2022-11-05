import express from "express";
import gameRouter from "./routes/game.js";
import {
 connect
} from "mongoose";
import {
 INFO
} from "./utils/utils.js";


const DB_URL = `mongodb://localhost:${INFO.DB_PORT}/gamedb`;

const app = express();


// IMPORTANT 
app.use(express.json());

app.use(gameRouter);

app.use("*", (req, res, next) => {
 res.json({
  message: "this endpoint does not exist!!"
 })
})


connect(DB_URL).then(() => {
 app.listen(INFO.PORT, () => {
  console.log("WEB SERVER STARED AT : ", INFO.PORT)
 })
})