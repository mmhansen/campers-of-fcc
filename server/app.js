/*
 * Dependencies
 */
import express from "express"
import path from "path"
import favicon from "serve-favicon"
import logger from "morgan"
import bodyParser from "body-parser"
import mongoose from "mongoose"
/*
 * Local imports, connect db, and start server
 */
import config from 'config'
import router from './routes'
const app = express() // start server
app.listen(process.env.PORT || config.port) // server listen on 3000 by default
mongoose.connect(config.mongodb) // connect to db

// get a little feedback
console.log(`${config.name} config running on port ${config.port}`)
/*
 * Middleware
 */
if (process.env.NODE_ENV !== 'test'){
  app.use(logger('dev'));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, '../client/public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '../client/public')));
/*
 * Route app
 */
router(app);

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, '../client/public', 'index.html'))
})

/*
 * Error handling
 */
 // catch 404 and forward to error handler
 app.use(function(req, res, next) {
   let err = new Error('Page not found')
   err.status = 404;
   next(err);
 });

 // error handlers

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

 export default app;
