import {
 Router
} from "express";
import {
 getGames,
 createGame,
 updateGame,
 deleteGame
} from "../controllers/game.js"
import { createGameValidation } from "../validation/game-validation.js";

const gameRouter = Router();


gameRouter.get("/games", getGames);

gameRouter.post("/create-game", createGameValidation, createGame);

gameRouter.post("/update-game", updateGame);

gameRouter.post("/delete-game", deleteGame);


export default gameRouter;