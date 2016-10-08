import express from "express"
import path from "path"
import favicon from "serve-favicon"
import logger from "morgan"
import bodyParser from "body-parser"
import mongoose from "mongoose"
//
import config from './conf/main'
import users from './routes/users'
import story from './routes/story'

// start server
var app = express();
mongoose.connect(config.mongodb);// connect to db
app.set('secretKey', config.secret)


/*
*  Middleware
*/
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
app.use(logger('dev'));
// parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// serve public folder
app.use(express.static(path.join(__dirname, '../public')));


/*
* Routes
*/

app.use('/api/users', users);
app.use('/api/story', story);


/*
* Error handling Middleware
*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});


module.exports = app;
