import {
 body
} from "express-validator";

export const createGameValidation = [
 body("name").isString().isLength({
  min: 4,
  max: 20
 }), body("publisher").isString().isLength({
  min: 2,
  max: 40
 }),
 body("platform").isString().isLength({
  min: 3
 }),
 body("pegi").isNumeric(),
 body("review").isFloat({
  min: 0,
  max: 10
 })
]


export const deleteGameValidation = [
 body("name").isString().isLength({
  min: 4,
  max: 20
 })
];