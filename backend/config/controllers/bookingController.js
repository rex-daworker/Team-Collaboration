function notImplemented(req, res) {
  res.status(501).json({
    message: "Not implemented yet",
    method: req.method,
    path: req.originalUrl
  });
}

const createReservation = (req, res) => notImplemented(req, res);
const getCustomerReservations = (req, res) => notImplemented(req, res);
const getSellerReservations = (req, res) => notImplemented(req, res);
const updateReservationStatus = (req, res) => notImplemented(req, res);

module.exports = {
  createReservation,
  getCustomerReservations,
  getSellerReservations,
  updateReservationStatus
};
