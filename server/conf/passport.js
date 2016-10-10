import {Strategy as JwtStrategy, ExtractJwt} from 'passport-jwt'
import LocalStrategy from 'passport-local'
import passport from 'passport'

import User from '../models/UserModel'
import conf from './main'

let opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey: conf.secret
}

const localOptions = {
  usernameField: 'email'
}

let localLogin = new LocalStrategy(localOptions, (email, password, done) => {
    email = email.trim()
    password = password.trim()
    User.findOne({email}, (err, user) => {
      if (err) { return done(err); }
      if(!user) {
        return done(null, false, {error: "Your login details could not be verified. Please try again."})
      }

      user.checkPassword(password, (err, isMatch) => {
        if (err) { return done(err); }
        if (!isMatch) {
          return done(null, false, {error: "Your login details could not be verified. Please try again."})
        }
      })

      return done(null, user)
    })
})

let jwtLogin = new JwtStrategy(opts, (payload, done) => {
  User.findOne({_id: payload._id}, (err, user) => {
    if(err) {
      return done(err, false)
    }

    if(!user) {
      return done(null, false)
    }

    return done(null, user)
  })
})

passport.use(jwtLogin);
passport.use(localLogin);
