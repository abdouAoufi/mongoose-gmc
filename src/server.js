import express from "express";
import {
 INFO
} from "./utils/utils.js";

const app = express();


// IMPORTANT 
app.use(express.json());



app.listen(INFO.PORT, () => {
 console.log("WEB SERVER STARED AT : ", INFO.PORT)
})