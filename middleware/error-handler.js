const errorHandler = (error, req, res, next) => {
  console.log(error);

  res.status(500).json({
    success: false,
    error: error.message
  });
};

module.exports = errorHandler;
