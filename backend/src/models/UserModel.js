const mongoose = require("mongoose");
const Schema = require("mongoose")

const schema = mongoose.Schema({
  email: String,
  password: String,
  basket: [
        {
            productId: { type:mongoose.Schema.Types.ObjectId, ref: 'Products' },
            count: { type: Number, default: 1 }
        }
    ]
});

module.exports = mongoose.model("User", schema);
