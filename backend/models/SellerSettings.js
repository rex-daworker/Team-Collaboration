const mongoose = require("mongoose");

const SellerSettingsSchema = new mongoose.Schema({
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  businessName: String,
  openingHours: String,
  pickupRules: String,
  reservationRules: String
});

module.exports = mongoose.model("SellerSettings", SellerSettingsSchema);

