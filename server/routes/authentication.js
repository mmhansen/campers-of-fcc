import express from 'express'
import passport from 'passport'
import passportService from '../services/passport'
import {
  register,
  login,
  deleteUser,
  getUsers,
  roleControl
} from '../controllers/authentication'
import { authAdmin } from '../services/passport'

import {
  approveContent,
  deleteContent
} from '../controllers/content'

const requireAuth = passport.authenticate('jwt', {session: false})
const requireLogin = passport.authenticate('local', {session:  false})

export function auth(app) {
	const authRoutes = express.Router()

	authRoutes.post('/register', register)
	authRoutes.post('/login', requireLogin, login)
	authRoutes.route('/user')
		.delete(requireAuth, authAdmin, deleteUser)
		.put(requireAuth, authAdmin, roleControl)

	app.use('/api/auth', authRoutes);
	
}

export function admin(app) {
	const adminRoutes = express.Router()
	adminRoutes.get('/users', requireAuth, authAdmin, getUsers)

  adminRoutes.route('/')
    .put(requireAuth, authAdmin, approveContent) // just to approve story by ID
    .delete(requireAuth, authAdmin, deleteContent) // just to delete story by ID
	
	app.use('/api/admin', adminRoutes)
}


