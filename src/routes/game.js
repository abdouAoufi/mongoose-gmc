import {
 Router
} from "express";
import {
 getGames,
 createGame,
 updateGame,
 deleteGame
} from "../controllers/game.js"
import {
 createGameValidation,
 deleteGameValidation
} from "../validation/game-validation.js";

const gameRouter = Router();


gameRouter.get("/game", getGames);

gameRouter.post("/game", createGameValidation, createGame);

gameRouter.put("/game", createGameValidation, updateGame);

gameRouter.delete("/game", deleteGameValidation, deleteGame);


export default gameRouter;