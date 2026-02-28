const express = require("express");
const {
  createOrder,
  getCustomerOrders,
  getSellerOrders,
  updateOrderStatus
} = require("../config/controllers/orderController");

const router = express.Router();

router.post("/", createOrder);
router.get("/customer", getCustomerOrders);
router.get("/seller", getSellerOrders);
router.patch("/:id/status", updateOrderStatus);

module.exports = router;
