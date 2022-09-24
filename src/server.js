import express from "express";
import gameRouter from "./routes/game.js";
import {
 INFO
} from "./utils/utils.js";

const app = express();


// IMPORTANT 
app.use(express.json());

app.use(gameRouter);

app.use("*", (req, res, next) => {
 res.json({
  message: "this endpoint does not exist!!"
 })
})



app.listen(INFO.PORT, () => {
 console.log("WEB SERVER STARED AT : ", INFO.PORT)
})