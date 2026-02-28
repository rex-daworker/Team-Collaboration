function notImplemented(req, res) {
  res.status(501).json({
    message: "Not implemented yet",
    method: req.method,
    path: req.originalUrl
  });
}

const listProducts = (req, res) => notImplemented(req, res);
const createProduct = (req, res) => notImplemented(req, res);
const updateProduct = (req, res) => notImplemented(req, res);
const deleteProduct = (req, res) => notImplemented(req, res);
const getInventory = (req, res) => notImplemented(req, res);
const updateInventory = (req, res) => notImplemented(req, res);
const getSellerSettings = (req, res) => notImplemented(req, res);
const updateSellerSettings = (req, res) => notImplemented(req, res);

module.exports = {
  listProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getInventory,
  updateInventory,
  getSellerSettings,
  updateSellerSettings
};
