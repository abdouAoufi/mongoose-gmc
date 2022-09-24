import {
 validationResult
} from "express-validator"

export const getGames = (req, res, next) => {
 res.json({
  message: "not implemented"
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
 }
 res.json({
  message: "not implemented"
 })
}
export const updateGame = (req, res, next) => {
 res.json({
  message: "not implemented"
 })
}
export const deleteGame = (req, res, next) => {
 res.json({
  message: "not implemented"
 })
}