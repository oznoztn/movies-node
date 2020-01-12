const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./data/db');
const bodyParser = require('body-parser');
const errorHandler = require('./middleware/error-handler');

// Load environment variables
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

// Route files
const movies = require('./routes/movies');

const PORT = process.env.PORT || 5000;

const app = express();

// Body parser
app.use(bodyParser.json());

// Morgan HTTP request logger in dev env
if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/movies', movies);

// Custom error handler middleware
app.use(errorHandler);

app.listen(
  PORT,
  console.log(`The server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`)
);
