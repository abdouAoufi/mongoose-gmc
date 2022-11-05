import mongoose from "mongoose";

const Model = mongoose.model;
const Schema = mongoose.Schema;

const gameSchema = new Schema({
 name: {
  type: Schema.Types.String,
  required: true
 },
 publisher: {
  type: Schema.Types.String,
  required: true
 },
 platform: {
  type: Schema.Types.String,
  required: true
 },
 pegi: {
  type: Schema.Types.Number,
  required: true
 },
 review: {
  type: Schema.Types.Number,
  required: true
 },
});


export default Model("Game", gameSchema)