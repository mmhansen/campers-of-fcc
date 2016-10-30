/*
 * Dependencies
 */
import jwt from 'jwt-simple'
import User from '../models/UserModel'
import config from 'config'

/*
 * Helper functions
 */

 function setUserInfo(request) {
   let getUserInfo = {
     _id: request._id,
     firstName: request.firstName,
     lastName: request.lastName,
     email: request.email,
     role: request.role
   };

   return getUserInfo;
 }

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
      return res.status(400).json({ error: "Email already exists" })
    }
    // make new user
    let newUser = new User({ email, password, firstName, lastName })
    // save new user
    newUser.save((err, user) => {
      if (err) { return next(err); }
      // return user with their token
      res.status(201).json({
        token: tokenForUser(user),
        user: setUserInfo(user)
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
    user: setUserInfo(req.user)
  });
}



/**
 * User Editing
 *
 **/
 // delete
export function deleteUser (req, res, next) {
  let _id = req.query.id

  User
    .findOne({ _id })
    .remove((err) => {
      if(err){return next(err)}
      res
        .status(200)
        .json({ "delete":"success" })
    })
  }
// get users w/ pagination
export function getUsers(req, res, next) {
  let page = parseInt(req.query.page)
  let limit = parseInt(req.query.limit)

  User
    .find({})
    .skip(limit * (page-1))
    .limit(limit)
    .exec((err, users) => {
      if (err){return next(err); }
      res
        .status(200)
        .json({
          users
        })
    })
}

// promote and demote users
export function roleControl (req, res, next) {
  let _id = req.query.id

  User
    .findOne({ _id })
    .exec((err, doc) => {
      if (err) { return next(err); }
      let newRole = (doc.role === 'Admin') ? 'Member': 'Admin';

      User.findOneAndUpdate(
        { _id },
        { $set: { role: newRole }},
        { new: true },
        (err, user) => {
            if (err){ return next(err); }
            res
              .status(200)
              .json({
                user
              })
        })
    })
}
