const Movie = require('../models/Movie');

const ErrorResponse = require('../utils/errorResponse');

exports.movie_list = async (req, res, next) => {
  try {
    const movies = await Movie.find();

    res.status(200).json({
      success: true,
      data: movies
    });
  } catch (error) {
    next(error);
  }
};

exports.movie_get = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      return next(new ErrorResponse(`Movie not found with given id of ${req.params.id}`, 404));
    }

    res.status(200).json({
      success: true,
      data: movie
    });
  } catch (error) {
    next(error);
  }
};

exports.movie_create = async (req, res, next) => {
  try {
    const insertedMovie = await Movie.create(req.body);

    res.status(201).json({
      success: true,
      data: insertedMovie
    });
  } catch (error) {
    next(error);
  }
};

exports.movie_update = async (req, res, next) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

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
    next(error);
  }
};

exports.movie_delete = async (req, res, next) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);

    if (!movie) {
      return next(new ErrorResponse(`Movie not found with given id of ${req.params.id}`, 404));
    }

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    next(error);
  }
};
