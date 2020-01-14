const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  // Why do I need to do this? Why spread operator doesn't 'spread' the message prop?
  error.message = err.message;

  switch (error.name) {
    case 'CastError':
      const id = error.value;
      const message = `Movie not found with given id of ${id}`;

      // It's actually a server error but user does not care if it is a server error
      // The user cares only if the requested resource is available or not.
      // And we say NO. It is not.
      error = new ErrorResponse(message, 404);
      break;
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  });
};

module.exports = errorHandler;
