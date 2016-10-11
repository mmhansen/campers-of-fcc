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
  submitContent
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

  /*
   * Content
   */
  // all -> get content
  contentRoutes.get('/:page', getContent)
  // all -> add content
  contentRoutes.post('/', submitContent)
  // admin -> approving content
  contentRoutes.post('/approve/:id', requireAuth, authAdmin, approveContent)
  // admin -> delete content
  contentRoutes.delete('/:id', requireAuth, authAdmin, deleteContent)




  // pass to server
  app.use('/api', apiRoutes)
}
