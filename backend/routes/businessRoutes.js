const express = require("express");
const {
  listProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getInventory,
  updateInventory,
  getSellerSettings,
  updateSellerSettings
} = require("../config/controllers/businessController");

const router = express.Router();

router.get("/products", listProducts);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

router.get("/inventory/:productId", getInventory);
router.patch("/inventory/:productId", updateInventory);

router.get("/seller/settings", getSellerSettings);
router.put("/seller/settings", updateSellerSettings);

module.exports = router;
