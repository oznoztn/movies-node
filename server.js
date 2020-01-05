const express = require('express');
const dotenv = require('dotenv');

// Load environment variables5
dotenv.config({ path: './config/config.env' });

// Route files
const movies = require('./routes/movies');

const PORT = process.env.PORT || 5000;

const app = express();

// Mount routers
app.use('/api/v1/movies', movies);

app.listen(
  PORT,
  console.log(`The server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`)
);
