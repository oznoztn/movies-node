const express = require('express');
const dotenv = require('dotenv');

const PORT = process.env.PORT || 5000;

const app = express();

dotenv.config({ path: './config/config.env' });

app.listen(
  PORT,
  console.log(`The server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`)
);
