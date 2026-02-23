const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  quantity: Number,
  lowStockAlert: Number
});

module.exports = mongoose.model("Inventory", InventorySchema);
