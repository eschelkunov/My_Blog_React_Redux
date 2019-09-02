const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const indexRouter = require('./routes/index');
const controller = require('./controllers/appController');

const app = express();

app.use(cors());

// support parsing of application/json type post data
app.use(bodyParser.json());

// support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

app.use('/api', verifyToken, indexRouter);

// Format of Token
// Authorization: Bearer <access_token>

// Verify Token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers.authorization;
  // Check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    jwt.verify(req.token, 'weLovePrivacy!', async (err, authData) => {
      if (err) {
        res.status(403).send(err);
      } else {
        // Next middleware
        next();
      }
    });
  } else {
    // Forbidden
    res.status(403).send(err);
  }
}

// HTML Pages routes

/* GET all posts page. */
app.get(['/*'], (req, res) => {
  // return only one one page in the end
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// Auth route
app.post('/auth', controller.authenticate);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
