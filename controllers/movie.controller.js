exports.movie_list = (req, res) => {
  res.status(200).json({
    message: 'Show all movies'
  });
};

exports.movie_get = (req, res) => {
  res.status(200).json({
    message: `Show movie ${req.params.id}`
  });
};

exports.movie_create = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Create a new movie'
  });
};

exports.movie_update = (req, res) => {
  res.status(200).json({
    success: true,
    message: `Update movie ${req.params.id}`
  });
};

exports.movie_delete = (req, res) => {
  res.status(200).json({
    success: true,
    message: `Delete movie ${req.params.id}`
  });
};
