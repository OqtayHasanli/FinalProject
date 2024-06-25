const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: String,
  price: Number,
  desc:String,
  category:String,
  image:String

});

module.exports = mongoose.model("Products", schema);