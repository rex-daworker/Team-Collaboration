const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: String,
  price: Number,
  description: String,
  category: String
});

module.exports = mongoose.model("Product", ProductSchema);
