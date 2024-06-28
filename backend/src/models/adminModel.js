const mongoose = require("mongoose");


const schema = mongoose.Schema({
  password:String
});
 
module.exports = mongoose.model("Admin", schema);