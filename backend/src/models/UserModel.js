const mongoose = require("mongoose");
const Schema=require("mongoose")

const schema = mongoose.Schema({
  email: String,
  password: String,
  basket:[{ type: Schema.Types.ObjectId, ref: 'Products' }]
});
 
module.exports = mongoose.model("User", schema);
