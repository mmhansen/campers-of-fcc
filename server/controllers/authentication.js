/*
 * Dependencies
 */
import jwt from 'jwt-simple'
import User from '../models/UserModel'
import config from '../conf/main'

/*
 * Helper functions
 */
 // make token
function tokenForUser(user) {
  const timestamp = new Date().getTime();
  // iat = issued at time
  // sub = identifying characteristic
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret)
}


/*
 * Register
 */
export function register (req, res, next) {
  // trim inputs
  //req.body = _.mapObj(req.body, (v) => { v.trim(); } )
  // define vars
  let { email, password, firstName, lastName } = req.body
  // see if user with email already exists
  User.findOne({email}, (err, existingUser) => {
    if (err) { return next(err); }
    if (existingUser) {
      return res.status(400).json({ errors: "Email already exists" })
    }
    // make new user
    let newUser = new User({ email, password, firstName, lastName })
    // save new user
    newUser.save((err, user) => {
      if (err) { return next(err); }
      // return user with their token
      res.status(201).json({
        token: tokenForUser(user),
        user
      })
    })
  })
}

/*
 * Login
 */

export function login (req, res, next) {
  // user already authenticated
  // just give them a token
  res.send({
    token: tokenForUser(req.user),
    user: req.user
  });
}
