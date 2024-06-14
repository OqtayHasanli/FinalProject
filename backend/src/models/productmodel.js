const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: String,
  price: Number,
  desc:String,
  star:Number,
  category:String,
  image:String

});

module.exports = mongoose.model("Products", schema);