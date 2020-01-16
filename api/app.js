'use strict';

// load modules
const express = require('express');
const bodyParser = require('body-parser')
const morgan = require('morgan');
const userRoutes = require('./routes/users')
const courseRoutes = require('./routes/courses')
const cors = require('cors');

//Import database
const db = require('./models');
const sequelize = require('./models').sequelize;

// variable to enable global error logging
const enableGlobalErrorLogging = process.env.ENABLE_GLOBAL_ERROR_LOGGING === 'true';

// create the Express app
const app = express();

// Enable All CORS Requests
app.use(cors());

// json middleware — helps with being able to use req.body in handlers
// app.use(express.json());
app.use(morgan('dev'));
//sets up body-parser middleware
// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// TODO setup your api routes here
app.use('/api', courseRoutes);
app.use('/api', userRoutes);


// setup a friendly greeting for the root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the REST API project!',
  });
});

// send 404 if no other route matched
app.use((req, res) => {
  res.status(404).json({
    message: 'Route Not Found',
  });
});

// setup a global error handler
app.use((err, req, res, next) => {
  if (enableGlobalErrorLogging) {
    console.error(`Global error handler: ${JSON.stringify(err.stack)}`);
  }

  res.status(err.status || 500).json({
    message: err.message,
    error: {},
  });
});

// set our port
app.set('port', process.env.PORT || 5000);
//test the connection to the database
sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

// start listening on our port, sync database
sequelize.sync().then()
const server = app.listen(app.get('port'), () => {
  console.log(`Express server is listening on port ${server.address().port}`);
});
