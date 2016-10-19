/*
 * Dependencies
 */
import express from 'express'
import passport from 'passport'
/*
 * Local imports
 */
import { register, login } from './controllers/authentication'
import passportService from './services/passport'
import {
  approveContent,
  getContent,
  deleteContent,
  submitContent,
  getCount
} from './controllers/content'
import { authAdmin } from './services/passport'
/*
 * Auth middleware
 */
 const requireAuth = passport.authenticate('jwt', {session: false})
 const requireLogin = passport.authenticate('local', {session:  false})
/*
 * Routes
 */

export default function (app){
  const apiRoutes     = express.Router(),
        authRoutes    = express.Router(),
        contentRoutes = express.Router();

  apiRoutes.use('/auth', authRoutes)
  apiRoutes.use('/content', contentRoutes)

  /*
   * Authorization
   */
  authRoutes.post('/register', register)
  authRoutes.post('/login', requireLogin, login)


  contentRoutes.get('/count', getCount)
  /*
   * Content
   */
  contentRoutes.route('/:id?')
    .get(getContent)
    .post(submitContent)
    .put(requireAuth, authAdmin, approveContent) // just to approve story by ID
    .delete(requireAuth, authAdmin, deleteContent) // just to delete story by ID





  // pass to server
  app.use('/api', apiRoutes)
}
