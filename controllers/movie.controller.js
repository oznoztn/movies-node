const Movie = require('../models/Movie');

exports.movie_list = async (req, res) => {
  try {
    const movies = await Movie.find();

    res.status(200).json({
      success: true,
      data: movies
    });
  } catch (error) {
    res.status(400).json({
      success: false
    });
  }
};

exports.movie_get = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      return res.status(400).json({
        success: false
      });
    }

    res.status(200).json({
      success: true,
      data: movie
    });
  } catch (error) {
    res.status(400).json({
      success: false
    });
  }

  res.status(200).json({
    message: `Show movie ${req.params.id}`
  });
};

exports.movie_create = async (req, res) => {
  try {
    const insertedMovie = await Movie.create(req.body);
    res.status(201).json({
      success: true,
      data: insertedMovie
    });
  } catch (error) {
    res.status(400).json({
      success: false
    });
  }
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
