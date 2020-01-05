const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Show all movies'
  });
});

router.get('/:id', (req, res) => {
  res.status(200).json({
    message: `Show movie ${req.params.id}`
  });
});

router.post('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Create a new movie'
  });
});

router.put('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    message: `Update movie ${req.params.id}`
  });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    message: `Delete movie ${req.params.id}`
  });
});

// export the router
module.exports = router;
