import passport from 'passport';
import passportServices from '../config/passport'
import express from 'express'

// local imports
import makeJwt from '../libs/make_jwt'
import UserModel from '../models/UserModel'
// helper function
const userResponse = (user) => ({
  token: makeJwt(user._id),
  user
})

//
export default function(app) {
  const authRoutes = express.Router();
  const passportOptions = {
    session: false
  }
  /*
   * Route Login Requests
   */
  authRoutes
    .post('/signin',
    passport.authenticate('local', passportOptions),
    function (req, res, next) {
      let { _id } = req.user;
      res.okay(userResponse(req.user))
    }
  )
  /*
   * Route Register Requests
   */
  authRoutes
    .post('/signup',
    function (req, res, next) {
      let { email, password, firstName, lastName } = req.body
      // see if user with email already exists
      UserModel.findOne({email}, (err, existingUser) => {
        if (err) { return next(err); }
        if (existingUser) { return res.conflict() }
        // make new user
        let newUser = new UserModel({ email, password, firstName, lastName })
        // save new user
        newUser.save((err, user) => {
          if (err) { return next(err); }
          // return user with their token
          res.created(userResponse(user))
      })
    })
  })
  /*
   * Route token validation
   */
  //authRoutes.post('/')

  return authRoutes
}
