// Imports
const express = require('express');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
const moment = require('moment');
const cors = require('cors');

// Load environmental variables
require('dotenv').config();

// Set host and port for the server
const host = process.env.HOST;
const port = process.env.PORT;

// Set database URI
const dbURI = process.env.DB_URI_LOCAL;

// Logging the date
date = moment().format("MMM Do YY");
console.log(date)

// Initialising express
const app = express()
app.use(cors());

// JSON middleware
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 50, // # of requests 
    message: "Too many requests"
  });

// Apply rate limiter to all requests
app.use(limiter);

// Connect to mongoDB (Also starts the server)
mongoose.connect(dbURI)
  .then((result) => app.listen(port, host))
  .catch((err) => console.log(err));

// Import router
const mainRoutes = require('./routes/main');

// Use routes
app.use('/', mainRoutes);

// Display port connection
console.log(`Server running on http://${host}:${port}`);
