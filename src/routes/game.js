import {
 Router
} from "express";
import {
 getGames,
 createGame,
 updateGame,
 deleteGame
} from "../controllers/game.js"

const gameRouter = Router();


gameRouter.get("/games", getGames);

gameRouter.post("/create-game", createGame);

gameRouter.post("/update-game", updateGame);

gameRouter.post("/delete-game", deleteGame);


export default gameRouter;