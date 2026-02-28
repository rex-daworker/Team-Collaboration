const express = require("express");
const {
  createReservation,
  getCustomerReservations,
  getSellerReservations,
  updateReservationStatus
} = require("../config/controllers/bookingController");

const router = express.Router();

router.post("/", createReservation);
router.get("/customer", getCustomerReservations);
router.get("/seller", getSellerReservations);
router.patch("/:id/status", updateReservationStatus);

module.exports = router;
