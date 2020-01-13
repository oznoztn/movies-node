const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movie.controller');

router.get('/', (req, res, next) => {
  movieController.movie_list(req, res, next);
});

router.get('/:id', (req, res, next) => {
  movieController.movie_get(req, res, next);
});

router.post('/', (req, res, next) => {
  movieController.movie_create(req, res, next);
});

router.put('/:id', (req, res, next) => {
  movieController.movie_update(req, res, next);
});

router.delete('/:id', (req, res, next) => {
  movieController.movie_delete(req, res, next);
});

// export the router
module.exports = router;
