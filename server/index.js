/*
 * Dependencies
 */
import express from "express"
/*
 * local imports
 */
import config from './libs/config'
import database from './libs/database'
import router from './config/router'
import middleware from './libs/middleware'
/*
 * Start the server
 */
const app = express()
/*
 * Connect to the database
 */
database(config())
/*
 * Apply middleware to server requests
 */
middleware(app)
/*
 * Route requests
 */
router(app)
/*
 * Start app listening on config port
 */
app.listen(process.env.PORT || config().port)
console.log(`Server listening on http://localhost:${config().port}`)
// export for testing
export default app;
