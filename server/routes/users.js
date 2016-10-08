import express from 'express'
import jwt from 'jsonwebtoken'


import { validateRegister } from '../shared/validation'
import User from '../models/UserModel'
import conf from '../conf/main'

var router = express.Router()

function generateToken(user) {
  return jwt.sign(user, conf.secret, {
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

router.post('/', (req, res, next) => {
  let { firstName, lastName, email, password, passwordConfirmation } = req.body
  let { errors, isValid } = validateRegister(req.body)

  if (!isValid) { res.status(400).json(errors) }

  User.findOne({email}, (err, existingUser) => {
    if (err) { next(err) }
    if (existingUser) {
      errors.email = "Email already exists"
      res.status(400).json(errors)
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



})


module.exports = router
