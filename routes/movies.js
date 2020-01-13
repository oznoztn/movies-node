const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movie.controller');

router.get('/', (req, res, next) => {
  movieController.movie_list(req, res);
});

router.get('/:id', (req, res, next) => {
  movieController.movie_get(req, res);
});

router.post('/', (req, res, next) => {
  movieController.movie_create(req, res);
});

router.put('/:id', (req, res, next) => {
  movieController.movie_update(req, res);
});

router.delete('/:id', (req, res, next) => {
  movieController.movie_delete(req, res);
});

// export the router
module.exports = router;
