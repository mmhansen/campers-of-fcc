import jwt from 'jsonwebtoken'
import User from '../models/UserModel'
import config from '../conf/main';
import validator from 'validator'
import { validateRegister } from '../shared/validation'


function generateToken(user) {
  return jwt.sign(user, config.secret, {
    expiresIn: 7 * 24 * 60 * 60
  })
}

function setUserInfo(request) {
  return {
    _id: request._id,
    firstName: request.firstName,
    lastName: request.lastName,
    email: request.email
  }
}
exports.login = function (req, res) {
  let userInfo = setUserInfo(req.user);

  res.status(200).json({
    token: 'JWT ' + generateToken(userInfo),
    user: userInfo
  });
}

exports.register = function (req, res, next) {
  let { firstName, lastName, email, password, passwordConfirmation } = req.body
  let { errors, isValid } = validateRegister(req.body)

  if (!isValid) {
    return res.status(400).json(errors)
  }

  User.findOne({email}, (err, existingUser) => {
    if (err) { next(err) }
    if (existingUser) {
      errors.email = "Email already exists"
      return res.status(400).json(errors)
    }

    let newUser = new User({email, firstName, lastName, password})

    newUser.save((err, user) => {
      if (err) {
        next(err)
      }

      let userInfo = setUserInfo(user)
      res.status(201).json({
        token: `JWT ${generateToken(userInfo)}`,
        user: userInfo
      })

    })
  })
}
