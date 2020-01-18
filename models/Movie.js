const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  const: {
    type: String,
    required: [true, 'Required'],
    unique: true,
    trim: true,
    maxlength: [9, 'Id can not be more than 9 characters.']
  },
  title: {
    type: String,
    required: [true, 'Required'],
    trim: true,
    maxlength: [100, 'Title can not be more than 100 characters.']
  },
  runtime: {
    type: Number,
    min: [1, 'Can not be less than 1 minute.'],
    max: [420, 'Can not be greater than 420 minutes.'],
    required: [true, 'Required']
  },
  year: {
    type: Number,
    min: [1900, 'Can not be earlier than 1900'],
    required: [true, 'Required']
  },
  imdbRating: {
    type: Number,
    min: [1, 'Can not be less than 1.'],
    max: [10, 'Can not be greater than 10.']
  },
  releaseDate: {
    type: Date,
    required: [true, 'Required']
  },
  votes: {
    type: Number
  },
  slug: String
});

module.exports = mongoose.model('Movie', MovieSchema);
