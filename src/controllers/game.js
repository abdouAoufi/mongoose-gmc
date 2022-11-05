import Game from "../model/Game.js"
import {
  validationResult
} from "express-validator";



export const getGames = (req, res, next) => {
  Game.find().exec().then((result) => {
    res.status(200).json({
      games: result
    })
  })
}
export const createGame = (req, res, next) => {
  const resultValidation = validationResult(req);
  if (!resultValidation.isEmpty()) {
    return res.status(422).json({
      message: "error validation",
      validation: {
        [resultValidation.array()[0].param]: resultValidation.array()[0].msg
      }
    });
  };

  const game = new Game(req.body);

  game.save().then(() => {
    return res.status(201).json({
      message: "Game saved"
    })
  }).catch(() => {
    return res.status(400).json({
      message: "Game not saved there was an error!"
    })
  })


}
export const updateGame = (req, res, next) => {
  const resultValidation = validationResult(req);
  if (!resultValidation.isEmpty()) {
    return res.status(422).json({
      message: "error validation",
      validation: {
        [resultValidation.array()[0].param]: resultValidation.array()[0].msg
      }
    });
  }
  Game.findByIdAndUpdate({
    name: req.body.name
  }, req.body).exec().then((result) => {
    if (result !== null) {
      res.json({
        message: "Game updated"
      })
    }
  })
}
export const deleteGame = (req, res, next) => {
  const resultValidation = validationResult(req);
  if (!resultValidation.isEmpty()) {
    return res.status(422).json({
      message: "error validation",
      validation: {
        [resultValidation.array()[0].param]: resultValidation.array()[0].msg
      }
    });
  }
  Game.findOneAndDelete({
    name: req.body.name
  }).exec().then((result) => {
    if (result !== null) {
      return res.status(201).json({
        message: "game Deleted"
      })
    } else {
      return res.status(400).json({
        message: "game not exist"
      })
    }
  })

}