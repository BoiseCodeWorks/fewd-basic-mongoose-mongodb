let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schema = new Schema({
  name: { type: String, required: true},
  size: { type: String, enum: ["small", "medium", "large"], required: true},
  toppings: [{type: String}],
  price: { type: Number, default: 9},
  crust: { type: String, enum: ["original", "flatcrust", "stuffed-crust"]},
  description: {type: String}
}, {
  timestamps: true
})

module.exports = mongoose.model("Pizza", schema)