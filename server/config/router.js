/*
 * Dependencies
 */
import express from 'express'
import graphqlHTTP from 'express-graphql'
/*
 * Local imports
 */
import localLogin from '../controllers/local_login'
import schema from '../graphql'
import errors from '../controllers/error'
/*
 * Routes
 */
export default function(app) {
  // create api sub-router
  const apiRoutes = express.Router()
  // connect authentication sub router to api router
  apiRoutes.use('/auth/', localLogin())
  // route graphQL on api router
  apiRoutes.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
    pretty: true
  }));
  /**
   * connect api router to main router
   */
  app.use('/api', apiRoutes)
  // catch stray routes in error handler
  errors(app)
}
