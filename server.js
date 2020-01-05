const express = require('express');
const dotenv = require('dotenv');

const PORT = process.env.PORT || 5000;

const app = express();

dotenv.config({ path: './config/config.env' });

app.get('/api/v1/movies', (req, res) => {
  res.status(200).json({
    message: 'Show all movies'
  });
});

app.get('/api/v1/movies/:id', (req, res) => {
  res.status(200).json({
    message: `Show movie ${req.params.id}`
  });
});

app.post('/api/v1/movies', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Create a new movie'
  });
});

app.put('/api/v1/movies/:id', (req, res) => {
  res.status(200).json({
    success: true,
    message: `Update movie ${req.params.id}`
  });
});

app.delete('/api/v1/movies/:id', (req, res) => {
  res.status(200).json({
    success: true,
    message: `Delete movie ${req.params.id}`
  });
});

app.listen(
  PORT,
  console.log(`The server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`)
);
