/* Dependencies */
import express from 'express'
import passport from 'passport'

/* Local imports */
import {
  approveContent,
  getContent,
  getStory,
  deleteContent,
  submitContent,
  getCount,
  updateContent,
  getMyStories
} from '../controllers/content'

/* Auth middleware */
const requireAuth = passport.authenticate('jwt', {session: false})

export default function (app){
  const contentRoutes = express.Router()
  contentRoutes.get('/count', getCount)
  
  /* User Content */
  contentRoutes.get('/my', getMyStories)
  contentRoutes.get('/:story_id', getStory)
  contentRoutes.route('/')
    .get(getContent)
    .post(requireAuth, submitContent)
    .put(requireAuth, updateContent)

  app.use('/api/content', contentRoutes)
}
