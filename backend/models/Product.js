const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: String,
  type: { type: String, enum: ["product", "service"], default: "product" },
  price: Number,
  description: String,
  category: String,
  durationMin: Number,
  isReservable: { type: Boolean, default: false }
});

module.exports = mongoose.model("Product", ProductSchema);
