function notImplemented(req, res) {
  res.status(501).json({
    message: "Not implemented yet",
    method: req.method,
    path: req.originalUrl
  });
}

const createOrder = (req, res) => notImplemented(req, res);
const getCustomerOrders = (req, res) => notImplemented(req, res);
const getSellerOrders = (req, res) => notImplemented(req, res);
const updateOrderStatus = (req, res) => notImplemented(req, res);

module.exports = {
  createOrder,
  getCustomerOrders,
  getSellerOrders,
  updateOrderStatus
};
