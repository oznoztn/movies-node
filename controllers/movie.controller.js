const Movie = require('../models/Movie');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

exports.movie_list = asyncHandler(async (req, res, next) => {
  const movies = await Movie.find();

  res.status(200).json({
    success: true,
    data: movies
  });
});

exports.movie_get = asyncHandler(async (req, res, next) => {
  const movie = await Movie.findById(req.params.id);

  if (!movie) {
    return next(new ErrorResponse(`Movie not found with given id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: movie
  });
});

exports.movie_create = asyncHandler(async (req, res, next) => {
  const insertedMovie = await Movie.create(req.body);

  res.status(201).json({
    success: true,
    data: insertedMovie
  });
});

exports.movie_update = asyncHandler(async (req, res, next) => {
  const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!movie) {
    return next(new ErrorResponse(`Movie not found with given id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: movie
  });
});

exports.movie_delete = asyncHandler(async (req, res, next) => {
  const movie = await Movie.findByIdAndDelete(req.params.id);

  if (!movie) {
    return next(new ErrorResponse(`Movie not found with given id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: {}
  });
});
