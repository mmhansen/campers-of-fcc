/*
 * Dependencies
 */
import express from "express"
import path from "path"
import favicon from "serve-favicon"
import logger from "morgan"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from 'cors'
/*
 * Local imports, connect db, and start server
 */
import config from './conf/main'
import router from './routes'
const app = express() // start server
app.listen(config.port) // server listen on 3000 by default
mongoose.connect(config.mongodb) // connect to db
app.set('secretKey', config.secret) // set secret key

console.log(`magic happens on port ${config.port}`)
/*
 * Middleware
 */
const corsOptions = {
  origin: 'http://localhost:8080' // client server
}
app.use(cors(corsOptions))
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, '../client/public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '../client/public')));
/*
 * Route app
 */
router(app);

/*
 * Error handling
 */
 app.use(function(req, res, next) {
   var err = new Error('Not Found');
   err.status = 404;
   res.json({
     message: err.message,
     error: {}
   });
 });
