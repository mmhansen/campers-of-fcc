/*
 * Dependencies
 */
import passport from 'passport'
import { Strategy } from 'passport-jwt'
import { ExtractJwt } from 'passport-jwt'
import LocalStrategy from 'passport-local'

/*
 * Local imports
 */
import User from '../models/UserModel'
import config from 'config'

/*
 * Local Strategy (For validating login)
 */

// unique field is Email
const localOptions = { usernameField: 'email' }

const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  email = email.trim() // trim inputs
  password = password.trim() // trim inputs
  // try to find user based on given email
  User.findOne({ email: email }, (err, user) => {
    if (err) { return done(err); } // catch db err
    if(!user) { return done(null, false) } // couldn't find user by email
    // compare passwords
    user.checkPassword(password, (err, isMatch) => {
      if (err) { return done(err); } // catch func err
      if (!isMatch) { return done(null, false) } // passwords don't match
      // all good, forward on the user
      return done(null, user)
    })
  })
})


/*
 * JWT Strategy (For token authentication)
 */
// JWT options
const opts = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
}
// payload is decoded token, use it to check if it is a valid token
const jwtLogin = new Strategy(opts, (payload, done) => {
  User.findById(payload.sub, (err, user) => {
    if(err) { return done(err, false); } // catch db err
    if(!user) { return done(null, false); } // user doesn't exist with given ID
    // all good -> return user
    return done(null, user)
  })
})


/*
 * Helper function (For admin authentication through token ID)
 */
export function authAdmin (req, res, next)  {
  User.findById(req.user._id, (err, user) => {
      if (err) { return next(err); }
      if (user.role !== "Admin") { return res.status(403).json({ res: 'Forbidden' }); }
      next();
  })
}

/*
 * Add Strategies as middleware
 */
passport.use(jwtLogin);
passport.use(localLogin);
