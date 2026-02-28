function notImplemented(req, res) {
  res.status(501).json({
    message: "Not implemented yet",
    method: req.method,
    path: req.originalUrl
  });
}

const register = (req, res) => notImplemented(req, res);
const login = (req, res) => notImplemented(req, res);

module.exports = {
  register,
  login
};
