/*
 * Dependencies
 */
import express from 'express'
import passport from 'passport'
/*
 * Local imports
 */
import passportService from './services/passport'
import {
  register,
  login,
  deleteUser,
  getUsers,
  roleControl
} from './controllers/authentication'
import {
  approveContent,
  getContent,
  getStory,
  deleteContent,
  submitContent,
  getCount,
  updateContent,
  getMyStories
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
        contentRoutes = express.Router(),
        adminRoutes   = express.Router();

  apiRoutes.use('/auth',    authRoutes)
  apiRoutes.use('/content', contentRoutes)
  apiRoutes.use('/admin',   adminRoutes)
  /*
   * Authorization
   */
  authRoutes.post('/register', register)
  authRoutes.post('/login', requireLogin, login)
  authRoutes.route('/user')
    .delete(requireAuth, authAdmin, deleteUser)
    .put(requireAuth, authAdmin, roleControl)




  //
  contentRoutes.get('/count', getCount)

  /*
   * User Content
   */
  contentRoutes.get('/my', getMyStories)
  //
  contentRoutes.get('/:story_id', getStory)
  contentRoutes.route('/')
    .get(getContent)
    .post(requireAuth, submitContent)
    .put(requireAuth, updateContent)

  /*
   * Admin Content Control
   */

  adminRoutes.get('/users', requireAuth, authAdmin, getUsers)

  adminRoutes.route('/')
    .put(requireAuth, authAdmin, approveContent) // just to approve story by ID
    .delete(requireAuth, authAdmin, deleteContent) // just to delete story by ID

  // pass to server
  app.use('/api', apiRoutes)
}
