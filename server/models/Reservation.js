const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  reservationTime: Date,
  partySize: Number,
  notes: String,
  status: { type: String, default: "pending" }
});

module.exports = mongoose.model("Reservation", ReservationSchema);
